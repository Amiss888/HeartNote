// ไฟล์ต่าง ๆ (รูป, วิดีโอ, และข้อความ)
const files = [
  "PTS1.jpg", "PTS2.jpg","PTS3.jpg","VDS0.mp4","VDS2.mp4","VDS3.mp4","VDS4.mp4","VDS5.mp4","VDS6.mp4","VDS7.mp4","VDS1.mp4","PTS4.jpg","PTS5.jpg"
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
