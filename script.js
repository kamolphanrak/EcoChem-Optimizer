function calculateImpact() {
    // รับค่าจากฟอร์ม
    const inputAmount = parseFloat(document.getElementById('input-amount').value);
    const energyUsage = parseFloat(document.getElementById('energy-usage').value);
    const co2Emission = parseFloat(document.getElementById('co2-emission').value);

    // คำนวณผลกระทบ (ตัวอย่างการคำนวณ)
    const energyImpact = energyUsage * 0.5; // สมมุติว่า 1 kWh สร้าง CO2 0.5 kg
    const co2Impact = co2Emission;

    // แสดงผลกระทบ
    const result = `
        ผลกระทบจากกระบวนการนี้:
        <ul>
            <li>พลังงานที่ใช้: ${energyImpact} kWh</li>
            <li>การปล่อย CO₂: ${co2Impact} กิโลกรัม</li>
        </ul>
    `;
    document.getElementById('output').innerHTML = result;

    // สร้างกราฟเปรียบเทียบ
    createComparisonChart([energyImpact, co2Impact]);
}

function createComparisonChart(data) {
    const ctx = document.getElementById('comparison-chart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['พลังงานที่ใช้', 'การปล่อย CO₂'],
            datasets: [{
                label: 'ผลกระทบจากกระบวนการนี้',
                data: data,
                backgroundColor: ['#4CAF50', '#ff9800'],
                borderColor: ['#388E3C', '#F57C00'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
