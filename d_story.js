// User Story: ในฐานะผู้ใช้ ฉันอยากเห็นรายการเมนูที่ราคาไม่เกินงบ
const menus = [
  { name: "ข้าวมันไก่", price: 45 },
  { name: "ก๋วยเตี๋ยวหมูสับ", price: 40 },
  { name: "สเต็กเนื้อฮ่องกง", price: 180 },
  { name: "ส้มตำไทย", price: 50 },
  { name: "ข้าวผัดกุ้ง", price: 60 }
];

const filterMenusByBudget = (menuList, maxBudget) => {
  if (typeof maxBudget !== 'number' || isNaN(maxBudget) || maxBudget < 0) {
    return [];
  }
  return menuList.filter(item => item.price <= maxBudget);
};

console.log("--- กรณีที่ 1: งบน้อย (35 บาท) ---");
console.log(filterMenusByBudget(menus, 35));

console.log("--- กรณีที่ 2: งบพอดีบางเมนู (50 บาท) ---");
console.log(filterMenusByBudget(menus, 50));

console.log("--- กรณีที่ 3: งบครอบคลุมทุกเมนู (200 บาท) ---");
console.log(filterMenusByBudget(menus, 200));

console.log("--- กรณีที่ 4: งบติดลบ (Edge case: -50 บาท) ---");
console.log(filterMenusByBudget(menus, -50));