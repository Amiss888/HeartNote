// ไฟล์ต่าง ๆ (รูป, วิดีโอ, และข้อความ)
const files = [
  "Pt1.png","Pt2.png","Pt3.png","Pt4.png","Pt5.png","Pt6.png","Pt7.png","Pt8.png","Pt9.png","Pt10.png","Pt11.png","Pt12.png","Pt13.png","Pt14.png","Pt15.png"
  ,"Pt16.png","Pt17.png","Pt18.png","Pt20.png","Pt21.png","Pt22.png","Pt23.png","Pt24.png","Pt25.png","Pt26.png","Pt27.png","Pt28.png","Pt29.png","Pt30.png",
  "Pt31.png","Pt32.png","Pt33.png","Pt34.png","Pt35.png","Pt36.png","Pt37.png","Pt38.png","Pt39.png","Pt40.png","Pt41.png","Pt42.jpg","Pt43.jpg","Pt44.jpg","Pt45.jpg",
  "Pt46.png","Pt47.png","Pt48.png","Pt49.png","Pt50.png","Pt19.png"
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
