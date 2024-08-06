import React from 'react';

const ActionAreaCard = ({
  title,
  content,
  dateTime,
  postedBy,
  postedInYear,
  role,
  campusType,
  referral,
  companyName,
  interviewDate,
  alumniID,
  experienceID,
}) => {
  return (
    <div className="p-6 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{content}</p>
      <div className="text-sm text-gray-600 mb-4">
        <p><strong>Company:</strong> {companyName}</p>
        <p><strong>Job Title:</strong> {role}</p>
        <p><strong>Description:</strong> {content}</p>
        <p><strong>Interview Date:</strong> {new Date(interviewDate).toLocaleDateString()}</p>
        <p><strong>On Campus:</strong> {campusType ? 'Yes' : 'No'}</p>
        <p><strong>Referral:</strong> {referral ? 'Yes' : 'No'}</p>
        <p><strong>Alumni ID:</strong> {alumniID}</p>
        <p><strong>Experience ID:</strong> {experienceID}</p>
      </div>
      <div className="text-xs text-gray-500 mt-4">
        <p><strong>Created At:</strong> {new Date(dateTime).toLocaleDateString()}</p>
        <p><strong>Updated At:</strong> {new Date(dateTime).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default ActionAreaCard;
