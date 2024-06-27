const availableTimesByDate = {
    '2024-06-28': ['10:00', '11:00', '12:00'],
    '2024-06-29': ['10:00', '11:00', '12:00'],
    '2024-06-30': ['14:00', '15:00', '16:00'],
    '2024-07-01': ['10:00', '11:00', '12:00'],
    '2024-07-02': ['14:00', '15:00', '16:00'],
    '2024-07-03': ['10:00', '11:00', '12:00'],
    '2024-07-04': ['14:00', '15:00', '16:00'],
    '2024-07-05': ['10:00', '11:00', '12:00'],
    '2024-07-06': ['14:00', '15:00', '16:00'],
    '2024-07-07': ['10:00', '11:00', '12:00'],
    '2024-07-08': ['14:00', '15:00', '16:00'],
    '2024-07-09': ['10:00', '11:00', '12:00'],
    '2024-07-10': ['14:00', '15:00', '16:00'],
    '2024-07-11': ['10:00', '11:00', '12:00'],
    '2024-07-12': ['14:00', '15:00', '16:00'],
    '2024-07-13': ['10:00', '11:00', '12:00'],
    '2024-07-14': ['14:00', '15:00', '16:00'],
    '2024-07-15': ['10:00', '11:00', '12:00'],
    '2024-07-16': ['14:00', '15:00', '16:00'],
    '2024-07-17': ['10:00', '11:00', '12:00'],
    '2024-07-18': ['14:00', '15:00', '16:00'],
  };


  const fetchAPI = (date) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(availableTimesByDate[date]){
                resolve(availableTimesByDate[date])
            }
            else{
                reject(new Error('No available times for the selected date.'));
            }
        } , 1000)
    })
  }

  const submitAPI = (formData) => {

    availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData) {
          resolve(true); // Simulate successful submission
        } else {
          reject(new Error('Form submission failed.'));
        }
      }, 1000); // Simulate API delay
    });
  };

  export{fetchAPI,submitAPI}