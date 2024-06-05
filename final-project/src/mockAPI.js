const availableTimesByDate = {
    '2024-06-05': ['10:00', '11:00', '12:00'],
    '2024-06-06': ['10:00', '11:00', '12:00'],
    '2024-06-07': ['14:00', '15:00', '16:00'],
    '2024-06-08': ['10:00', '11:00', '12:00'],
    '2024-06-09': ['14:00', '15:00', '16:00'],
    '2024-06-10': ['10:00', '11:00', '12:00'],
    '2024-06-11': ['14:00', '15:00', '16:00'],
    '2024-06-12': ['10:00', '11:00', '12:00'],
    '2024-06-13': ['14:00', '15:00', '16:00'],
    '2024-06-14': ['10:00', '11:00', '12:00'],
    '2024-06-15': ['14:00', '15:00', '16:00'],
    '2024-06-16': ['10:00', '11:00', '12:00'],
    '2024-06-17': ['14:00', '15:00', '16:00'],
    '2024-06-18': ['10:00', '11:00', '12:00'],
    '2024-06-19': ['14:00', '15:00', '16:00'],
    '2024-06-20': ['10:00', '11:00', '12:00'],
    '2024-06-21': ['14:00', '15:00', '16:00'],
    '2024-06-22': ['10:00', '11:00', '12:00'],
    '2024-06-23': ['14:00', '15:00', '16:00'],
    '2024-06-24': ['10:00', '11:00', '12:00'],
    '2024-06-25': ['14:00', '15:00', '16:00'],
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