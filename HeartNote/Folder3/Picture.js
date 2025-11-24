// ไฟล์ต่าง ๆ (รูป, วิดีโอ, และข้อความ)
const files = [
  "PTY1.jpg", "PTY2.jpg", "VDY1.mp4", "VDY2.mp4"
];

const gallery = document.getElementById("gallery");

files.forEach(item => {
  let element;

  // ถ้าเป็นไฟล์รูป
  if (item.endsWith(".png") || item.endsWith(".jpg") || item.endsWith(".jpeg") || item.endsWith(".gif")) {
    element = document.createElement("img");
    element.src = `images/${item}`;

  // ถ้าเป็นวิดีโอ
  } else if (item.endsWith(".mp4") || item.endsWith(".webm")) {
    element = document.createElement("video");
    element.src = `images/${item}`;
    element.controls = true;

  // ถ้าเป็นข้อความ (string ที่ไม่มีนามสกุลไฟล์)
  } else {
    element = document.createElement("p");
    element.textContent = item;
  }

  gallery.appendChild(element);
});
