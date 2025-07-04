import { useState } from 'react';
import { FormRow, FormRowSelect, SubmitBtn, SmartAnalyzer, SuggestionModal } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { RESOURCE_STATUS, RESOURCE_TYPE } from '../../../utils/constants';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

export const action = (queryClient) => async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // Check required fields
  const requiredFields = ['title', 'url', 'resourceStatus', 'resourceType'];
  const missingFields = requiredFields.filter(field => !data[field]);
  
  if (missingFields.length > 0) {
    toast.error(`Please provide ${missingFields.join(', ')}`);
    return null;
  }

  try {
    await customFetch.post('/resources', data);
    queryClient.invalidateQueries(['resources']);
    toast.success('Resource added successfully');
    return redirect('/dashboard/all-resources');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AddResource = () => {
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    platform: '',
    resourceType: RESOURCE_TYPE.ARTICLE,
    resourceStatus: RESOURCE_STATUS.TO_READ,
    tags: '',
    notes: ''
  });
  
  const [analysisData, setAnalysisData] = useState(null);
  const [showSuggestionModal, setShowSuggestionModal] = useState(false);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  const handleInputChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAnalysisComplete = (result) => {
    if (result.success) {
      setAnalysisData(result.data);
      setShowSuggestionModal(true);
    }
  };

  const handleApplySuggestions = async (suggestions, appliedFields) => {
    try {
      const updatedFormData = { ...formData };
      
      if (suggestions.title) updatedFormData.title = suggestions.title;
      if (suggestions.platform) updatedFormData.platform = suggestions.platform;
      if (suggestions.type) updatedFormData.resourceType = suggestions.type;
      if (suggestions.tags) updatedFormData.tags = Array.isArray(suggestions.tags) ? suggestions.tags.join(', ') : suggestions.tags;
      if (suggestions.summary) updatedFormData.notes = suggestions.summary;
      
      setFormData(updatedFormData);
      
      if (analysisData?.analysisId) {
        await customFetch.put(`/ai-analysis/${analysisData.analysisId}/usage`);
      }
      
      setShowSuggestionModal(false);
      toast.success(`Applied ${appliedFields.length} AI suggestions successfully!`);
      
    } catch (error) {
      toast.error('Failed to apply suggestions, but you can still use them manually');
      setShowSuggestionModal(false);
    }
  };

  return (
    <Wrapper>
      <Form method='post' className='form' onSubmit={() => setIsFormSubmitting(true)}>
        <h4 className='form-title'>Add New Resource</h4>
        <div className='form-center'>
          {/* Required Fields Section */}
          <div className='form-section'>
            <h5 className='section-title'>Required Information</h5>
            <FormRow 
              type='text' 
              name='title' 
              labelText='Title *'
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              required 
            />
            <FormRow 
              type='url' 
              name='url' 
              labelText='URL *'
              value={formData.url}
              onChange={(e) => handleInputChange('url', e.target.value)}
              required 
            />
            
            {/* AI Smart Analyzer */}
            <SmartAnalyzer
              url={formData.url}
              onAnalysisComplete={handleAnalysisComplete}
              disabled={isFormSubmitting}
            />
            
            <div className='form-row-flex'>
              <FormRowSelect
                labelText='Status *'
                name='resourceStatus'
                value={formData.resourceStatus}
                onChange={(e) => handleInputChange('resourceStatus', e.target.value)}
                defaultValue={RESOURCE_STATUS.TO_READ}
                list={Object.values(RESOURCE_STATUS)}
                required
              />
              <FormRowSelect
                labelText='Type *'
                name='resourceType'
                value={formData.resourceType}
                onChange={(e) => handleInputChange('resourceType', e.target.value)}
                defaultValue={RESOURCE_TYPE.ARTICLE}
                list={Object.values(RESOURCE_TYPE)}
                required
              />
            </div>
          </div>

          {/* Optional Fields Section */}
          <div className='form-section'>
            <h5 className='section-title'>Additional Information</h5>
            <FormRow 
              type='text' 
              name='platform' 
              labelText='Platform'
              value={formData.platform}
              onChange={(e) => handleInputChange('platform', e.target.value)}
            />
            <FormRow 
              type='text' 
              name='tags' 
              labelText='Tags'
              value={formData.tags}
              onChange={(e) => handleInputChange('tags', e.target.value)}
              placeholder='Separate tags with commas'
            />
            <FormRow
              type='textarea'
              name='notes'
              labelText='Notes'
              value={formData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              rows='10'
            />
          </div>

          <SubmitBtn formBtn disabled={isFormSubmitting} />
          
          {/* Hidden inputs for controlled form data */}
          {Object.entries(formData).map(([key, value]) => (
            <input key={key} type="hidden" name={key} value={value} />
          ))}
        </div>
      </Form>

      {/* AI Suggestion Modal */}
      <SuggestionModal
        isOpen={showSuggestionModal}
        onClose={() => setShowSuggestionModal(false)}
        aiAnalysis={analysisData?.aiAnalysis}
        onApplySuggestions={handleApplySuggestions}
        processingTime={analysisData?.processingTime}
      />
    </Wrapper>
  );
};

export default AddResource; 