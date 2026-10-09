const METHODS = ['π₀.₅', 'UVT', 'AFCE'];

const chartData = {
  all: [
    [39.15, 2.11],
    [35.76, 0.56],
    [50.97, 1.65],
  ],
  ba: [
    [9.73, 2.41],
    [14.53, 3.06],
    [37.33, 2.66],
  ],
  sa: [
    [63.67, 1.86],
    [53.44, 2.22],
    [62.33, 1.45],
  ],
};

const chartNotes = {
  all: 'AFCE improves overall success by 11.82 percentage points over π₀.₅ and 15.21 points over UVT.',
  ba: 'AFCE achieves the highest mean success on all five bimanual tasks among the three compared methods.',
  sa: 'Single-arm success is slightly below π₀.₅. Precision control, especially Pinch Tongs, remains a limitation.',
};

const tasks = [
  ['Pinch Tongs', 43.33, 1.33, 5.33],
  ['Click Mouse', 60, 80, 54.67],
  ['Fold Glasses', 38, 64.67, 62],
  ['Hammer Nail', 84.67, 22, 86.67],
  ['Pick Bucket', 67.33, 60, 80.67],
  ['Water Plant', 88.67, 92.67, 84.67],
  ['Unlock iPad', 2, 0, 7.33],
  ['Hanoi', 5.33, 0.67, 29.33],
  ['Assembly', 1.33, 0, 9.33],
  ['Microwave', 32, 41.33, 81.33],
  ['Photograph', 8, 30.67, 59.33],
];

function renderChart(group) {
  const chart = document.querySelector('#chart');
  const note = document.querySelector('#chart-note');

  chart.innerHTML = chartData[group]
    .map(([value, std], index) => {
      return `
        <div class="bar-row">
          <span>${METHODS[index]}</span>
          <div class="bar-track">
            <div class="bar" style="width:${value}%"></div>
          </div>
          <span class="bar-value">${value.toFixed(2)} ± ${std.toFixed(2)}%</span>
        </div>
      `;
    })
    .join('');

  note.textContent = chartNotes[group];
}

function bindChartTabs() {
  document.querySelectorAll('[data-group]').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('[data-group]').forEach((other) => {
        const active = other === button;
        other.classList.toggle('active', active);
        other.setAttribute('aria-pressed', String(active));
      });
      renderChart(button.dataset.group);
    });
  });
}

function renderTaskTable() {
  const rows = document.querySelector('#task-rows');

  rows.innerHTML = tasks
    .map(([name, ...values]) => {
      const best = Math.max(...values);
      const cells = values
        .map((value) => {
          const className = value === best ? 'best' : '';
          return `<td class="${className}">${value.toFixed(2)}%</td>`;
        })
        .join('');

      return `<tr><td>${name}</td>${cells}</tr>`;
    })
    .join('');
}

function bindLightbox() {
  const modal = document.querySelector('#lightbox');
  const enlarged = document.querySelector('#enlarged');
  const closeButton = document.querySelector('#close-lightbox');

  document.querySelectorAll('[data-image]').forEach((button) => {
    button.addEventListener('click', () => {
      const sourceImage = button.querySelector('img');
      enlarged.src = `assets/${button.dataset.image}.png`;
      enlarged.alt = sourceImage.alt;
      modal.showModal();
    });
  });

  closeButton.addEventListener('click', () => modal.close());
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });
}

renderChart('all');
bindChartTabs();
renderTaskTable();
bindLightbox();
