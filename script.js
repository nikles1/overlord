document.querySelectorAll('.card-header').forEach(header => {
  header.addEventListener('click', () => {
    const card = header.parentElement;
    card.classList.toggle('active');
    card-header.classList.toggle('active');
    
    document.querySelectorAll('.card').forEach(otherCard => {
      if (otherCard !== card) {
        otherCard.classList.remove('active');
        otherCard.querySelector('.card-header').classList.remove('active');
      }
    });
  });
});
