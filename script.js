function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (email && pass) {
    alert(`مرحبًا بك في Red Dragon، ${email}`);
    // لاحقًا: انتقال إلى الصفحة الرئيسية (منشورات، ملف شخصي، إلخ)
  } else {
    alert("الرجاء إدخال البريد وكلمة المرور.");
  }
}
