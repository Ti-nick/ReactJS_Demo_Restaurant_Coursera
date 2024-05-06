const availableTimesByDate = {
    '2024-05-21': ['10:00', '11:00', '12:00'],
    '2024-05-22': ['10:00', '11:00', '12:00'],
    '2024-05-23': ['14:00', '15:00', '16:00'],
    '2024-05-24': ['10:00', '11:00', '12:00'],
    '2024-05-25': ['14:00', '15:00', '16:00'],
    '2024-05-26': ['10:00', '11:00', '12:00'],
    '2024-05-06': ['14:00', '15:00', '16:00'],
    '2024-05-07': ['10:00', '11:00', '12:00'],
    '2024-05-08': ['14:00', '15:00', '16:00'],
    '2024-05-09': ['10:00', '11:00', '12:00'],
    '2024-05-10': ['14:00', '15:00', '16:00'],
    '2024-05-11': ['10:00', '11:00', '12:00'],
    '2024-05-12': ['14:00', '15:00', '16:00'],
    '2024-05-13': ['10:00', '11:00', '12:00'],
    '2024-05-14': ['14:00', '15:00', '16:00'],
    '2024-05-15': ['10:00', '11:00', '12:00'],
    '2024-05-16': ['14:00', '15:00', '16:00'],
    '2024-05-17': ['10:00', '11:00', '12:00'],
    '2024-05-18': ['14:00', '15:00', '16:00'],
    '2024-05-19': ['10:00', '11:00', '12:00'],
    '2024-05-20': ['14:00', '15:00', '16:00'],
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