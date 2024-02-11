function createListItem(ulId, checked, text) {
    const ul = document.getElementById(ulId);
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'border-0', 'd-flex', 'align-items-center', 'ps-0');
    const input = document.createElement('input');
    input.classList.add('form-check-input', 'me-3');
    input.type = 'checkbox';
    input.value = '';
    input.setAttribute('aria-label', '');
    if (checked) {
      input.checked = true;
      const span = document.createElement('s');
      span.textContent = text;
      li.appendChild(input);
      li.appendChild(span);
    } else {
      li.textContent = text;
      li.prepend(input);
    }
    ul.appendChild(li);
  }

  // Add your list items here
  createListItem('checked_list', true, '🎥 Movie date');
  createListItem('checked_list', true, '🏞️ Food park date');
  createListItem('checked_list', true, '🎞️ Cinema date');
  createListItem('checked_list', true, '🍟 Fast food date');
  createListItem('checked_list', true, '🕹️ Arcade date');
  createListItem('checked_list', true, '🎱 Play billiards');
  createListItem('checked_list', true, '🖥️ Play video/pc games');
  createListItem('checked_list', true, '🤝 Meet fam (yours)');
  createListItem('checked_list2', true, '🏪 Eat in a convenience store');
  createListItem('checked_list2', true, '🎤 Sing together in a karaoke');
  createListItem('checked_list2', true, '🍨 Eat ice cream');
  createListItem('checked_list2', true, '🧑‍🤝‍🧑 Hold hands');
  createListItem('checked_list2', true, '🤗 Hug');
  createListItem('checked_list2', true, '💏 Kiss');
  createListItem('checked_list2', true, '🤭 R18');
  
  createListItem('unchecked_list', false, '☕ Coffee date');
  createListItem('unchecked_list', false, '🌞 Picnic date');
  createListItem('unchecked_list', false, '🥘 Samngyup date');
  createListItem('unchecked_list', false, '🍽️ Fine dining date');
  createListItem('unchecked_list', false, '🖼️ Museum date');
  createListItem('unchecked_list', false, '🏖️ Beach date');
  createListItem('unchecked_list', false, '🎣 Lake date');
  createListItem('unchecked_list', false, '🏀 Play basketball');
  createListItem('unchecked_list', false, '🌙 Late night walks');
  createListItem('unchecked_list', false, '💃🕺 Dance in the rain');
  createListItem('unchecked_list2', false, '😴 Sleep together');
  createListItem('unchecked_list2', false, '🍹 Drink together');
  createListItem('unchecked_list2', false, '🌅 Wait for sunrise');
  createListItem('unchecked_list2', false, '🌇 Watch sunset');
  createListItem('unchecked_list2', false, '🌌 Stargazing');
  createListItem('unchecked_list2', false, '🚲 Ride bike');
  createListItem('unchecked_list2', false, '🚗 Long drives');
  createListItem('unchecked_list2', false, '🎡 Peryahan date');
