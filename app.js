// ── Subject Data ──
const subjects = {
  '25CS2ETIAA': {
    name: 'INTRODUCTION TO AI AND APPLICATIONS',
    code: '25CS2ETIAA',
    type: 'theory',
    teachers: [
      { name: 'MUTHURANI N H', subject: '25CS2ETIAA - INTRODUCTION TO AI AND APPLICATIONS' }
    ],
    assessment: {
      theoryMarks: '47/50',
      theoryAttendance: '86%'
    },
    breakdown: ['19/20', '17/20', '18/20', '5/5', '5/5', '47/50', '86%'],
    chart: {
      labels: ['CIE1', 'CIE2', 'CIE3', 'Quiz1', 'AAT', 'Final IA'],
      obtained: [19, 17, 18, 5, 5, 47],
      max: [20, 20, 20, 5, 5, 50]
    }
  },

  '25CS2ESIPP': {
    name: 'INTRODUCTION TO PYTHON PROGRAMMING',
    code: '25CS2ESIPP',
    type: 'theorylab',
    teachers: [
      { name: 'Dr. R Kalyan', subject: '25CS2ESIPP - INTRODUCTION TO PYTHON PROGRAMMING' }
    ],
    assessment: {
      theoryMarks: '23/25',
      theoryAttendance: '80%',
      labMarks: '20/25',
      labAttendance: '86%'
    },
    breakdown: ['8/10', '9/10', '9/10', '5/5', '20/25', '43/50', '80%'],
    chart: {
      labels: ['CIE1', 'CIE2', 'CIE3', 'AAT1', 'LAB1', 'Final IA'],
      obtained: [8, 9, 9, 5, 20, 43],
      max: [10, 10, 10, 5, 25, 50]
    }
  },

  '25ME2AEIDL': {
    name: 'IDEA LAB',
    code: '25ME2AEIDL',
    type: 'theory',
    teachers: [
      { name: 'Prof. HARISH V MEKALI', subject: '25ME2AEIDL - IDEA LAB' }
    ],
    assessment: {
      theoryMarks: '50/50',
      theoryAttendance: '100%'
    },
    breakdown: ['50/50', '50/50', '100%'],
    chart: {
      labels: ['IDL1', 'Final IA'],
      obtained: [50, 50],
      max: [50, 50]
    }
  },

  '25MA2BSMCS': {
    name: 'MATHEMATICAL FOUNDATION FOR COMPUTER SCIENCE STREAM - 2',
    code: '25MA2BSMCS',
    type: 'theory',
    teachers: [
      { name: 'Dr. SUJATHA N', subject: '25MA2BSMCS - MATHEMATICAL FOUNDATION FOR COMPUTER SCIENCE STREAM - 2' }
    ],
    assessment: {
      theoryMarks: '47/50',
      theoryAttendance: '87%'
    },
    breakdown: ['18/20', '19/20', 'Absent', '5/5', '5/5', '47/50', '87%'],
    chart: {
      labels: ['CIE1', 'CIE2', 'CIE3', 'Quiz1', 'Quiz2', 'Final IA'],
      obtained: [18, 19, 0, 5, 5, 47],
      max: [20, 20, 20, 5, 5, 50]
    }
  },

  '25MA2AECEN': {
    name: 'ENGLISH COMMUNICATION SKILLS',
    code: '25MA2AECEN',
    type: 'theory',
    teachers: [
      { name: 'Mr. Ajo Skariah Sisil', subject: '25MA2AECEN - ENGLISH COMMUNICATION SKILLS' }
    ],
    assessment: {
      theoryMarks: '46/50',
      theoryAttendance: '88%'
    },
    breakdown: ['25/25', '21/25', '46/50', '88%'],
    chart: {
      labels: ['CIE1', 'CIE2', 'Final IA'],
      obtained: [25, 21, 46],
      max: [25, 25, 50]
    }
  },

  '25CY2BSCCS': {
    name: 'APPLIED CHEMISTRY FOR SMART SYSTEMS',
    code: '25CY2BSCCS',
    type: 'theorylab',
    teachers: [
      { name: 'Dr. Pradeepa SM', subject: '25CY2BSCCS - APPLIED CHEMISTRY FOR SMART SYSTEMS' },
      { name: 'Dr. Manjunatha S', subject: '25CY2BSCCS - APPLIED CHEMISTRY FOR SMART SYSTEMS' },
      { name: 'Dr.Ramya R', subject: '25CY2BSCCS - APPLIED CHEMISTRY FOR SMART SYSTEMS' },
      { name: 'Dr. K L Nagashree', subject: '25CY2BSCCS - APPLIED CHEMISTRY FOR SMART SYSTEMS' },
      { name: 'Dr.T.N.Ravishankar', subject: '25CY2BSCCS - APPLIED CHEMISTRY FOR SMART SYSTEMS' }
    ],
    assessment: {
      theoryMarks: '15/25',
      theoryAttendance: '87%',
      labMarks: '20/25',
      labAttendance: '90%'
    },
    breakdown: ['4/10', '5/10', '5/10', '5/5', '20/25', '35/50', '87%', '90%'],
    chart: {
      labels: ['CIE1', 'CIE2', 'CIE3', 'AAT1', 'LAB1', 'Final IA'],
      obtained: [4, 5, 5, 5, 20, 35],
      max: [10, 10, 10, 5, 25, 50]
    }
  },

  '25MA2HSICE': {
    name: 'INDIAN CONSTITUTION & ENGINEERING ETHICS',
    code: '25MA2HSICE',
    type: 'theory',
    teachers: [
      { name: 'Mr. Altaf Hussain', subject: '25MA2HSICE - INDIAN CONSTITUTION & ENGINEERING ETHICS' }
    ],
    assessment: {
      theoryMarks: '70/100',
      theoryAttendance: '86%'
    },
    breakdown: ['38/50', '32/50', '70/100', '86%'],
    chart: {
      labels: ['CIE1', 'CIE2', 'Final IA'],
      obtained: [38, 32, 70],
      max: [50, 50, 100]
    }
  },

  '25ME2ESIME': {
    name: 'INTRODUCTION TO MECHANICAL ENGINEERING',
    code: '25ME2ESIME',
    type: 'theory',
    teachers: [
      { name: 'Dr. Sridhar Kurse', subject: '25ME2ESIME - INTRODUCTION TO MECHANICAL ENGINEERING' },
      { name: 'Dr. Ravikumar M.', subject: '25ME2ESIME - INTRODUCTION TO MECHANICAL ENGINEERING' },
      { name: 'Dr. Sangamesh C Godi', subject: '25ME2ESIME - INTRODUCTION TO MECHANICAL ENGINEERING' },
      { name: 'Prof. Santhosh Kumar S.', subject: '25ME2ESIME - INTRODUCTION TO MECHANICAL ENGINEERING' },
      { name: 'Prof. Kiran kumar K U', subject: '25ME2ESIME - INTRODUCTION TO MECHANICAL ENGINEERING' },
      { name: 'Dr. Tataram K Chavan', subject: '25ME2ESIME - INTRODUCTION TO MECHANICAL ENGINEERING' },
      { name: 'Dr. Ravi L', subject: '25ME2ESIME - INTRODUCTION TO MECHANICAL ENGINEERING' },
      { name: 'Prof. Shivakumar M', subject: '25ME2ESIME - INTRODUCTION TO MECHANICAL ENGINEERING' },
      { name: 'Dr. Gopalakrishna H.D.', subject: '25ME2ESIME - INTRODUCTION TO MECHANICAL ENGINEERING' },
      { name: 'Prof. Verma R', subject: '25ME2ESIME - INTRODUCTION TO MECHANICAL ENGINEERING' },
      { name: 'Prof. G Dilip Maruthi', subject: '25ME2ESIME - INTRODUCTION TO MECHANICAL ENGINEERING' },
      { name: 'Prof. Rashmi R', subject: '25ME2ESIME - INTRODUCTION TO MECHANICAL ENGINEERING' },
      { name: 'Sri. Shashiraj', subject: '25ME2ESIME - INTRODUCTION TO MECHANICAL ENGINEERING' }
    ],
    assessment: {
      theoryMarks: '49/50',
      theoryAttendance: '87%'
    },
    breakdown: ['15/20', '20/20', '20/20', '8.5/10', '49/50', '87%'],
    chart: {
      labels: ['CIE1', 'CIE2', 'CIE3', 'AAT1', 'Final IA'],
      obtained: [15, 20, 20, 8.5, 49],
      max: [20, 20, 20, 10, 50]
    }
  }
};

// ── Current chart instance ──
let currentChart = null;

// ── Render a subject ──
function renderSubject(code) {
  const data = subjects[code];
  if (!data) return;

  // Update active tab
  document.querySelectorAll('.subject-tab').forEach(tab => {
    tab.classList.toggle('active', tab.textContent.trim() === code);
  });

  // ── Teacher cards ──
  const teacherContainer = document.getElementById('teacher-container');
  teacherContainer.innerHTML = '';
  data.teachers.forEach(teacher => {
    const card = document.createElement('div');
    card.className = 'teacher-card';
    card.innerHTML = `
      <img class="teacher-photo" src="coming soon.jpg" alt="Teacher Photo">
      <div class="teacher-info">
        <h3 class="teacher-name">${teacher.name}</h3>
        <p class="teacher-subject">${teacher.subject}</p>
      </div>
    `;
    teacherContainer.appendChild(card);
  });

  // ── Internal Assessment ──
  const iaSection = document.getElementById('ia-section');
  if (data.type === 'theorylab') {
    iaSection.innerHTML = `
      <h2 class="ia-heading">Internal Assessment</h2>
      <div class="ia-tabs-row">
        <div class="ia-inner-box ia-tab-box">
          <div class="ia-inner-header">Theory</div>
          <div class="ia-inner-body">
            Marks Obtained: ${data.assessment.theoryMarks}
            Attendance: ${data.assessment.theoryAttendance}
          </div>
        </div>
        <div class="ia-inner-box ia-tab-box">
          <div class="ia-inner-header">Lab</div>
          <div class="ia-inner-body">
            Marks Obtained: ${data.assessment.labMarks} Attendance: ${data.assessment.labAttendance}
          </div>
        </div>
      </div>
    `;
  } else {
    iaSection.innerHTML = `
      <h2 class="ia-heading">Internal Assessment</h2>
      <div class="ia-inner-box">
        <div class="ia-inner-header">Final</div>
        <div class="ia-inner-body">
          <p>Marks Obtained: ${data.assessment.theoryMarks} Attendance: ${data.assessment.theoryAttendance}</p>
        </div>
      </div>
    `;
  }

  // ── Full subject title + breakdown ──
  const subjectSection = document.getElementById('subject-detail-section');
  subjectSection.innerHTML = `
    <h2 class="full-subject-title">${data.name}( ${data.code})</h2>
    <div class="assessment-breakdown">
      ${data.breakdown.map(item => `<p>${item}</p>`).join('')}
    </div>
  `;

  // ── Chart ──
  const chartSection = document.getElementById('chart-section-content');
  const maxVal = Math.max(...data.chart.max);
  const yMax = Math.ceil(maxVal / 10) * 10;
  const stepSize = 10;

  // Remaining data for stacking (max - obtained)
  const remaining = data.chart.obtained.map((val, i) => data.chart.max[i] - val);

  chartSection.innerHTML = `
    <div class="chart-box">
      <h3 class="chart-title">${data.name}( ${data.code})</h3>
      <canvas id="marksChart"></canvas>
      <div class="chart-legend">
        <div class="legend-item"><span class="legend-swatch obtained"></span>Marks Obtained</div>
        <div class="legend-item"><span class="legend-swatch max"></span>Max Marks</div>
      </div>
    </div>
  `;

  // Destroy old chart
  if (currentChart) {
    currentChart.destroy();
    currentChart = null;
  }

  const ctx = document.getElementById('marksChart').getContext('2d');
  currentChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.chart.labels,
      datasets: [
        {
          label: 'Marks Obtained',
          data: data.chart.obtained,
          backgroundColor: '#5bb4e5',
          stack: 'stack0',
          barPercentage: 0.7,
          categoryPercentage: 0.8
        },
        {
          label: 'Max Marks',
          data: remaining,
          backgroundColor: '#f0a868',
          stack: 'stack0',
          barPercentage: 0.7,
          categoryPercentage: 0.8
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        datalabels: {
          display: function(context) {
            return context.datasetIndex === 0 && context.dataset.data[context.dataIndex] > 0;
          },
          color: '#ffffff',
          font: { size: 11, weight: 'bold' },
          anchor: 'center',
          align: 'center',
          formatter: function(value) {
            return value;
          }
        }
      },
      scales: {
        y: {
          min: 0,
          max: yMax,
          ticks: { stepSize: stepSize },
          grid: {
            color: '#e0e0e0'
          }
        },
        x: {
          grid: { display: false },
          ticks: {
            maxRotation: 0,
            minRotation: 0
          }
        }
      }
    }
  });
}

// ── Tab click handlers ──
document.addEventListener('DOMContentLoaded', function() {
  Chart.register(ChartDataLabels);

  const tabs = document.querySelectorAll('.subject-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      renderSubject(this.textContent.trim());
    });
  });

  // Render default subject
  renderSubject('25CS2ETIAA');
});
