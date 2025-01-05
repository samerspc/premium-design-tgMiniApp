function toggleDropdown(element) {
    const dropdown = element.parentElement; // Находим родительский блок dropdown
    const options = dropdown.querySelector('.dropdown-options');
    const arrow = element.querySelector('.dropdown-arrow'); // Находим стрелку

    if (element.textContent.trim() === "Объект") {
      element.classList.add('weakColor');
    } else {
      element.classList.remove('weakColor');
    }

    // Закрываем все другие открытые списки
    document.querySelectorAll('.dropdown-options.active').forEach(opt => {
      if (opt !== options) {
        opt.classList.remove('active');
        const otherArrow = opt.parentElement.querySelector('.dropdown-arrow');
        if (otherArrow) otherArrow.classList.remove('open');
      }
    });

    options.classList.toggle('active');
    arrow.classList.toggle('open');
}

function selectOption(element) {
    const dropdown = element.closest('.dropdown'); // Находим текущий dropdown
    const select = dropdown.querySelector('.dropdown-select');
    const options = dropdown.querySelectorAll('.dropdown-option');
    const arrow = select.querySelector('.dropdown-arrow'); // Находим стрелку

    select.textContent = element.textContent;
    select.appendChild(arrow); // Возвращаем стрелку на место

    if (select.textContent === "Объект") {
      select.classList.add('weakColor');
    } else {
      select.classList.remove('weakColor');
    }

    options.forEach(option => option.classList.remove('chosen')); 
    element.classList.add('chosen');

    dropdown.querySelector('.dropdown-options').classList.remove('active'); // Закрываем список
    arrow.classList.remove('open');
}

window.addEventListener('click', (e) => {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
        dropdown.querySelector('.dropdown-options').classList.remove('active');
        const arrow = dropdown.querySelector('.dropdown-arrow');
        if (arrow) arrow.classList.remove('open');
      }
    });
});

function toggleSubOptions(optionId) {
    const allSubOptions = document.querySelectorAll('.sub-options');
    allSubOptions.forEach(options => options.classList.remove('active'));

    const selectedSubOptions = document.getElementById(optionId);
    if (selectedSubOptions) {
      selectedSubOptions.classList.add('active');
    }
  }