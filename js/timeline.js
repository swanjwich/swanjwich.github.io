function generateMonthImages(month, year, imagePaths) {
    const container = document.getElementById(`${month.toLowerCase()}-${year}-images`);
    const imagesHTML = imagePaths.map(path => `
      <div class="col-12 col-sm-6 col-lg-4 color-black">
        <img src="${path}" class="border-radius" style="width: 250px; height: 250px;" alt="">
      </div>
    `).join('');
  
    container.innerHTML += imagesHTML;
  }

const february2023Images = [
    'img/feb-20.jpg',
    'img/feb.jpg',
    'img/feb28.jpg'
  ];

const march2023Images = [
    'img/march.jpg',
    'img/march2.jpg',
    'img/march3.jpg',
    'img/march5.jpg',
    'img/march7.jpg',
    'img/march8.jpeg'
  ];

const april2023Images = [
    'img/april2.jpg',
    'img/april3.jpg',
    'img/april4.jpg'
  ];
  
const may2023Images = [
    'img/may1.jpg',
    'img/may2.jpg',
    'img/may3.jpg',
    'img/may4.jpg',
    'img/may5.jpg',
    'img/may6.jpg',
    'img/may8.jpg',
    'img/may9.jpg',
    'img/may10.jpg',
  ];

const june2023Images = [
    'img/june1.jpg',
    'img/june2.jpg',
    'img/june4.jpg',
    'img/june6.jpg',
    'img/june3.jpg',
    'img/june5.jpg'
  ];

const july2023Images = [
    'img/july1.jpg',
    'img/july2.jpeg',
    'img/july3.jpg',
    'img/july4.jpg',
    'img/july5.jpg',
    'img/july6.jpg'
  ];

const august2023Images = [
    'img/aug1.jpg',
    'img/aug2.jpg',
    'img/aug3.jpg'
  ];

const september2023Images = [
    'img/sept1.jpg',
    'img/sept2.jpg',
    'img/sept3.jpg',
    'img/sept4.jpg',
    'img/sept5.jpg',
    'img/sept6.jpg',
    'img/sept7.jpg',
    'img/sept8.jpg',
    'img/sept9.jpg'
  ];

const oct2023Images = [
    'img/oct1.jpg',
    'img/oct2.jpg',
    'img/oct3.jpg',
    'img/oct4.jpg',
    'img/oct5.jpg',
    'img/oct6.jpg',
    'img/oct7.jpg',
    'img/oct8.jpg',
    'img/oct9.jpg'
  ];

const nov2023Images = [
    'img/nov1.jpg',
    'img/nov2.jpg',
    'img/nov3.jpg'
  ];

const dec2023Images = [
    'img/dec1.jpg',
    'img/dec2.jpg',
    'img/dec3.jpg',
    'img/dec4.jpg',
    'img/dec5.jpg',
    'img/dec6.jpg',
    'img/dec7.jpg',
    'img/dec8.jpg',
    'img/dec9.jpg'
  ];

const jan2024Images = [
    'img/jan1.jpg',
    'img/jan2.jpg',
    'img/jan3.jpg'
  ];

const feb2024Images = [
    'img/feb2024-1.jpg',
    'img/feb2024-2.jpg',
    'img/feb2024-3.jpg',
    'img/feb2024-4.jpg',
    'img/feb2024-5.jpg',
    'img/feb2024-6.jpg',
    'img/february2024/1.jpg',
    'img/february2024/3.jpg',
    'img/february2024/2.jpg',
    'img/february2024/4.jpg',
    'img/february2024/5.jpg',
    'img/february2024/6.jpg',
    'img/february2024/7.jpg',
    'img/february2024/8.jpg',
    'img/february2024/9.jpg',
    'img/february2024/10.jpg',
    'img/february2024/11.jpg',
    'img/february2024/13.jpg'
  ];

  generateMonthImages('February', 2023, february2023Images);
  generateMonthImages('March', 2023, march2023Images);
  generateMonthImages('April', 2023, april2023Images);
  generateMonthImages('May', 2023, may2023Images);
  generateMonthImages('June', 2023, june2023Images);
  generateMonthImages('July', 2023, july2023Images);
  generateMonthImages('August', 2023, august2023Images);
  generateMonthImages('September', 2023, september2023Images);
  generateMonthImages('October', 2023, oct2023Images);
  generateMonthImages('November', 2023, nov2023Images);
  generateMonthImages('December', 2023, dec2023Images);
  generateMonthImages('January', 2024, jan2024Images);
  generateMonthImages('February', 2024, feb2024Images);
  
