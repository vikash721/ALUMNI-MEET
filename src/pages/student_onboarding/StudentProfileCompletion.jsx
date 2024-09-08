import React, { useState, useEffect } from 'react';
import styles from './StudentProfileCompletion.module.css';
import Notification from '../../components/authantication/notification/Notificationmodal'; // Import the Notification component
import { FaUser, FaEnvelope, FaCalendar, FaSchool, FaGraduationCap } from 'react-icons/fa';

const StudentProfileCompletion = () => {
  const currentYear = new Date().getFullYear();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    email: '',
    profilePic: '',
    collegeName: '',
    course: '',
    major: '',
    enrollmentYear: '',
    graduationYear: '',
    interests: '',
    careerGoals: '',
    newCollegeName: '',
    newCollegeDetails: '',
  });
  const [collegeOptions, setCollegeOptions] = useState([
    'Satyug Darshan Institute of Engineering & Technology',
    'ABC College of Engineering',
    'XYZ University',
  ]);
  const [showNewCollegeForm, setShowNewCollegeForm] = useState(false);
  const [notification, setNotification] = useState(null); // Manage notification state

  useEffect(() => {
    const maxGraduationYear = currentYear + 5; // Up to 5 years in the future
    const minGraduationYear = currentYear + 1;
    setFormData((prev) => ({
      ...prev,
      graduationYear: Math.max(minGraduationYear, prev.graduationYear),
    }));
  }, [currentYear]);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const handleCollegeAdd = () => {
    // Add logic to save new college details
    console.log('New college details submitted:', formData.newCollegeName, formData.newCollegeDetails);
    setShowNewCollegeForm(false);
    setFormData({ ...formData, collegeName: 'Your college will be added soon. Thank you!' });

    // Show notification
    setNotification({
      message: 'Your request has been submitted. We will notify you via email once your college is listed on our website.',
      type: 'success',
    });
  };

  const handleNotificationClose = () => {
    setNotification(null);
  };

  return (
    <div className={styles.profileCompletionContainer}>
      <h2 className={styles.profileCompletionTitle}>Complete Your Profile</h2>
      <p className={styles.profileCompletionSubtitle}>
        You're almost there! Just a few more details to connect with the alumni network.
      </p>

      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ width: `${(step / 3) * 100}%` }}
        ></div>
      </div>

      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={handleNotificationClose}
        />
      )}

      {step === 1 && (
        <div className={styles.formSection}>
          <h3 className={styles.formTitle}>Personal Information</h3>

          <label className={styles.label}>
            <FaUser className={styles.icon} /> Full Name
          </label>
          <input
            className={styles.input}
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
          />

          <label className={styles.label}>
            <FaCalendar className={styles.icon} /> Date of Birth
          </label>
          <input
            className={styles.input}
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />

          <label className={styles.label}>
            <FaEnvelope className={styles.icon} /> Email
          </label>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          <label className={styles.label}>Profile Picture</label>
          <input
            className={styles.input}
            type="file"
            name="profilePic"
            onChange={handleChange}
          />
        </div>
      )}

      {step === 2 && (
        <div className={styles.formSection}>
          <h3 className={styles.formTitle}>Academic Information</h3>

          <label className={styles.label}>
            <FaSchool className={styles.icon} /> College Name
          </label>
          <select
            className={styles.select}
            name="collegeName"
            value={formData.collegeName}
            onChange={handleChange}
          >
            <option value="">Select your college</option>
            {collegeOptions.map((college, index) => (
              <option key={index} value={college}>
                {college}
              </option>
            ))}
            <option value="other">Other (not listed)</option>
          </select>

          {formData.collegeName === 'other' && (
            <div className={styles.newCollegeForm}>
              <label className={styles.label}>New College Name</label>
              <input
                className={styles.input}
                type="text"
                name="newCollegeName"
                value={formData.newCollegeName}
                onChange={handleChange}
                placeholder="Enter your college name"
              />

              <label className={styles.label}>College Details</label>
              <textarea
                className={styles.textarea}
                name="newCollegeDetails"
                value={formData.newCollegeDetails}
                onChange={handleChange}
                placeholder="Provide details about your college"
              ></textarea>

              <button
                className={styles.submitButton}
                onClick={handleCollegeAdd}
              >
                Submit College
              </button>
            </div>
          )}

          <label className={styles.label}>
            <FaGraduationCap className={styles.icon} /> Course
          </label>
          <select
            className={styles.select}
            name="course"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="">Select your course</option>
            {/* Add more courses as needed */}
            <option value="B.Tech">B.Tech</option>
            <option value="M.Tech">M.Tech</option>
            <option value="BBA">BBA</option>
            <option value="MBA">MBA</option>
            <option value="B.Sc">B.Sc</option>
            <option value="M.Sc">M.Sc</option>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
          </select>

          <label className={styles.label}>Specialization/Major</label>
          <input
            className={styles.input}
            type="text"
            name="major"
            value={formData.major}
            onChange={handleChange}
            placeholder="Enter your major"
          />

          <label className={styles.label}>Year of Enrollment</label>
          <select
            className={styles.select}
            name="enrollmentYear"
            value={formData.enrollmentYear}
            onChange={handleChange}
          >
            <option value="">Select your enrollment year</option>
            {[...Array(21).keys()].map((i) => {
              const year = currentYear - i;
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>

          <label className={styles.label}>Year of Graduation</label>
          <select
            className={styles.select}
            name="graduationYear"
            value={formData.graduationYear}
            onChange={handleChange}
          >
            <option value="">Select your expected graduation year</option>
            {[...Array(10).keys()].map((i) => {
              const year = currentYear + i + 1;
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>
      )}

      {step === 3 && (
        <div className={styles.formSection}>
          <h3 className={styles.formTitle}>Additional Information</h3>

          <label className={styles.label}>Interests</label>
          <textarea
            className={styles.textarea}
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            placeholder="What are your interests?"
          ></textarea>

          <label className={styles.label}>Career Goals</label>
          <textarea
            className={styles.textarea}
            name="careerGoals"
            value={formData.careerGoals}
            onChange={handleChange}
            placeholder="What are your career goals?"
          ></textarea>
        </div>
      )}

      <div className={styles.buttonContainer}>
        {step > 1 && (
          <button className={styles.backButton} onClick={handleBack}>
            Back
          </button>
        )}
        {step < 3 ? (
          <button className={styles.nextButton} onClick={handleNext}>
            Next
          </button>
        ) : (
          <button className={styles.submitButton} onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default StudentProfileCompletion;
