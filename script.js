document.querySelectorAll('.filters button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filters button').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.work-item').forEach(item => {
      item.style.display = (filter === 'all' || item.dataset.category === filter) ? '' : 'none';
    });
  });
});