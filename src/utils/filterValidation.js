/**
 * Filter validation utilities
 * Contains all validation logic for filter components to ensure data integrity
 * and provide user feedback for invalid inputs.
 */

/**
 * Validates if a date range is valid (start date <= end date)
 * @param {string} startDate - Start date in YYYY-MM-DD format
 * @param {string} endDate - End date in YYYY-MM-DD format
 * @returns {boolean} True if the date range is valid or if either date is empty
 */
export const validateDateRange = (startDate, endDate) => {
  // Allow empty dates - user might be in the process of selecting
  if (!startDate || !endDate) {
    return true;
  }
  
  try {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    // Check if dates are valid
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return false;
    }
    
    // Start date should be before or equal to end date
    return start <= end;
  } catch (error) {
    console.warn('Date validation error:', error);
    return false;
  }
};

/**
 * Checks if any filter has an active value
 * @param {Object} filterValues - Object containing all filter values
 * @param {string} filterValues.selectedDate - Single selected date
 * @param {string} filterValues.startDate - Range start date
 * @param {string} filterValues.endDate - Range end date
 * @param {string} filterValues.selectedZone - Selected zone
 * @param {string} filterValues.tripCountFilter - Trip count filter value
 * @param {boolean} filterValues.showTripCountFilter - Whether trip count filter is enabled
 * @returns {boolean} True if any filter is active
 */
export const hasAnyActiveFilters = ({
  selectedDate,
  startDate,
  endDate,
  selectedZone,
  tripCountFilter,
  showTripCountFilter = false
}) => {
  // Check if specific date is selected
  if (selectedDate && selectedDate.trim() !== '') {
    return true;
  }
  
  // Check if date range is selected
  if ((startDate && startDate.trim() !== '') || (endDate && endDate.trim() !== '')) {
    return true;
  }
  
  // Check if zone is selected
  if (selectedZone && selectedZone.trim() !== '') {
    return true;
  }
  
  // Check if trip count filter is active and not default
  if (showTripCountFilter && tripCountFilter && tripCountFilter !== 'all') {
    return true;
  }
  
  return false;
};

/**
 * Checks if date range filter is active
 * @param {string} startDate - Range start date
 * @param {string} endDate - Range end date
 * @returns {boolean} True if either start or end date is selected
 */
export const hasDateRangeFilter = (startDate, endDate) => {
  return (startDate && startDate.trim() !== '') || (endDate && endDate.trim() !== '');
};

/**
 * Checks if specific date filter is active
 * @param {string} selectedDate - Single selected date
 * @returns {boolean} True if specific date is selected
 */
export const hasSpecificDateFilter = (selectedDate) => {
  return selectedDate && selectedDate.trim() !== '';
};

/**
 * Checks if both date filter types are active (for OR logic indicator)
 * @param {string} selectedDate - Single selected date
 * @param {string} startDate - Range start date
 * @param {string} endDate - Range end date
 * @returns {boolean} True if both specific date and date range are active
 */
export const hasBothDateFilters = (selectedDate, startDate, endDate) => {
  return hasSpecificDateFilter(selectedDate) && hasDateRangeFilter(startDate, endDate);
};

/**
 * Validates a single date string
 * @param {string} dateString - Date string to validate
 * @returns {boolean} True if the date is valid
 */
export const isValidDate = (dateString) => {
  if (!dateString || dateString.trim() === '') {
    return true; // Empty dates are considered valid (optional)
  }
  
  try {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  } catch (error) {
    return false;
  }
};

/**
 * Gets validation error message for date range
 * @param {string} startDate - Range start date
 * @param {string} endDate - Range end date
 * @returns {string|null} Error message or null if valid
 */
export const getDateRangeErrorMessage = (startDate, endDate) => {
  if (!startDate || !endDate) {
    return null; // No error for empty dates
  }
  
  if (!isValidDate(startDate)) {
    return 'Start date is invalid';
  }
  
  if (!isValidDate(endDate)) {
    return 'End date is invalid';
  }
  
  if (!validateDateRange(startDate, endDate)) {
    return 'Start date must be before or equal to end date';
  }
  
  return null;
};

/**
 * Clears all filter values - returns object with empty values
 * @returns {Object} Object with all filter values cleared
 */
export const getClearedFilterValues = () => ({
  selectedDate: '',
  startDate: '',
  endDate: '',
  selectedZone: '',
  tripCountFilter: 'all'
});

/**
 * Clears only date-related filter values
 * @returns {Object} Object with only date filter values cleared
 */
export const getClearedDateFilters = () => ({
  selectedDate: '',
  startDate: '',
  endDate: ''
});

/**
 * Formats a date for display in filter tags
 * @param {string} dateString - Date string to format
 * @returns {string} Formatted date string or '...' if invalid
 */
export const formatDateForDisplay = (dateString) => {
  if (!dateString || !isValidDate(dateString)) {
    return '...';
  }
  
  try {
    return new Date(dateString).toLocaleDateString();
  } catch (error) {
    return '...';
  }
};
