document.addEventListener('DOMContentLoaded', (event) => {
    const rates = {
      graphicService: 100,  // stawka za godzinę usługi graficznej
      managementService: 150, // stawka za godzinę usługi zarządczej
      programmingService: 200  // stawka za godzinę usługi programistycznej
    }
  
    function updateHoursValue(id) {
      document.querySelector(`#${id}Value`).textContent = document.querySelector(`#${id}`).value;
    }
  
    updateHoursValue('graphicServiceHours');
    updateHoursValue('managementServiceHours');
    updateHoursValue('programmingServiceHours');
  
    document.querySelectorAll('input[type="range"]').forEach(item => {
      item.addEventListener('input', (event) => {
        updateHoursValue(event.target.id);
      });
    });
  
    document.querySelector("#calculateButton").addEventListener('click', (event) => {
      let graphicServiceHours = parseInt(document.querySelector('#graphicServiceHours').value) || 0;
      let managementServiceHours = parseInt(document.querySelector('#managementServiceHours').value) || 0;
      let programmingServiceHours = parseInt(document.querySelector('#programmingServiceHours').value) || 0;
  
      let totalCost = graphicServiceHours * rates.graphicService +
                      managementServiceHours * rates.managementService +
                      programmingServiceHours * rates.programmingService;
  
      document.querySelector('#totalCost').textContent = `Total Cost: ${totalCost} PLN`;
    });
    
  });