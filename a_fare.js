// ฟังก์ชันคำนวณค่ารถ NGV
const calcFare = (distanceKm) => {
  // ถ้าระยะทางติดลบหรือไม่ใช่ตัวเลข ให้คืนค่า 0
  if (typeof distanceKm !== 'number' || isNaN(distanceKm) || distanceKm < 0) {
    return 0;
  }

  // 2 กม. แรก 10 บาท
  if (distanceKm <= 2) {
    return 10;
  }

  // กม.ถัดไปคิด กม.ละ 2 บาท (เศษของกิโลเมตรปัดขึ้น)
  const extraKm = Math.ceil(distanceKm - 2);
  return 10 + extraKm * 2;
};

// ทดสอบ 3 กรณี
console.log("ระยะทาง 1.5 กม. -> ค่ารถ:", calcFare(1.5));
console.log("ระยะทาง 2.0 กม. -> ค่ารถ:", calcFare(2));
console.log("ระยะทาง 7.2 กม. -> ค่ารถ:", calcFare(7.2));