import { useState } from 'react';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between font-sans bg-gradient-to-tr from-[#f5f3f7] via-[#faf8fb] to-[#eae7f1] text-[#1e293b] p-4 w-full select-none">
      
      {/* حاوية مرنة لضبط السنترة العمودية بدقة */}
      <div className="flex-grow flex items-center justify-center w-full mt-10 mb-6">
        
        {/* البطاقة البيضاء - تم ضبط العرض الأقصى والـ padding والـ shadow لتطابق الصورة */}
        <div className="w-full max-w-[430px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100/60 px-9 py-10 flex flex-col">
          
          {/* الشعار (SharafAI) - مسافة سفلية متزنة mb-7 */}
    <div className="flex items-center justify-center mb-7">
      <img 
        src={"/image.png"} 
        alt="SharafAI Logo" 
        className="h-[45px] w-auto object-contain" 
        // الارتفاع h-8 (يعادل 32px) وهو ممتاز جداً ومطابق لحجم الشعار في التصميم، يمكنك تعديله إذا رغبت
      />
    </div>

          {/* العناوين الترحيبية - مسافات متقاربة جداً mb-1 و mb-8 كما في الصورة */}
          <h2 className="text-[22px] font-semibold text-[#0f172a] text-center mb-1 tracking-tight">
            Welcome Back
          </h2>
          <p className="text-xs text-gray-400 text-center mb-8 tracking-wide">
            Sign in to access your dashboard.
          </p>

          {/* نموذج تسجيل الدخول */}
          <form onSubmit={handleLogin} className="w-full space-y-4">
            
            {/* حقل الإيميل */}
            <div className="space-y-1">
              <label className="block text-[11px] font-semibold text-gray-500 tracking-wide">Email Address</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                  <svg className="w-4 h-4 text-gray-400/90" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full pl-9 pr-4 py-[9px] rounded-lg border border-gray-200 placeholder-gray-300 text-xs focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-400 text-gray-700 transition-all"
                />
              </div>
            </div>

            {/* حقل كلمة المرور */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="block text-[11px] font-semibold text-gray-500 tracking-wide">Password</label>
                <a href="#" className="text-[10px] font-semibold text-[#4b4aa3] hover:underline tracking-tight">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                  <svg className="w-4 h-4 text-gray-400/90" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </span>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-4 py-[9px] rounded-lg border border-gray-200 placeholder-gray-300 text-xs focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-400 text-gray-700 transition-all"
                />
              </div>
            </div>

            {/* خيار تذكرني */}
            <div className="flex items-center gap-2 pt-0.5">
              <input
                type="checkbox"
                id="keep-signed-in"
                checked={keepSignedIn}
                onChange={(e) => setKeepSignedIn(e.target.checked)}
                className="w-3.5 h-3.5 border-gray-300 rounded text-[#4b4aa3] focus:ring-[#4b4aa3] accent-[#4b4aa3] cursor-pointer"
              />
              <label htmlFor="keep-signed-in" className="text-[11px] text-gray-400 font-medium cursor-pointer select-none">
                Keep me signed in
              </label>
            </div>

            {/* زر تسجيل الدخول (Sign In ->) بالتدرج اللوني الدقيق وحجم الارتفاع النحيف اللطيف */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#a21229] to-[#4b4aa3] hover:opacity-95 text-white font-medium py-2.5 px-4 rounded-lg text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm !mt-5"
            >
              Sign In <span className="text-sm font-light">&rarr;</span>
            </button>
          </form>

          {/* الفاصل الخطي - تم تفتيح اللون وتصغير الخط */}
          <div className="w-full my-6 flex items-center justify-between">
            <span className="w-[32%] border-b border-gray-100"></span>
            <span className="text-[9px] text-gray-400 uppercase font-bold tracking-widest">Or continue with</span>
            <span className="w-[32%] border-b border-gray-100"></span>
          </div>

          {/* أزرار السوشيال ميديا (موزعة بالنصف بالتساوي وبارتفاع متناسق) */}
          <div className="grid grid-cols-2 gap-3 w-full">
            {/* زر جوجل */}
            <button
              type="button"
              className="flex items-center justify-center gap-1.5 py-2 px-4 rounded-lg border border-gray-200/70 hover:bg-gray-50 text-[11px] font-semibold text-gray-600 transition-all"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Google
            </button>

            {/* زر الـ SSO */}
            <button
              type="button"
              className="flex items-center justify-center gap-1.5 py-2 px-4 rounded-lg border border-gray-200/70 hover:bg-gray-50 text-[11px] font-semibold text-gray-600 transition-all"
            >
              <svg className="w-3.5 h-3.5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
              </svg>
              SSO
            </button>
          </div>

          {/* رابط إنشاء حساب / طلب الوصول باللون الأحمر القاتم والخط الصغير */}
          <p className="mt-8 text-center text-[11px] text-gray-400 font-medium tracking-wide">
            New to the platform?{' '}
            <a href="#" className="text-[#a21229] font-bold hover:underline transition-colors ml-0.5">
              Request access
            </a>
          </p>

        </div>
      </div>

      {/* روابط الفوتر السفلية - بخط صغير جداً وناعم وموزع بمرونة */}
      <div className="w-full max-w-md flex items-center justify-center gap-5 text-[10px] text-gray-400/90 font-medium pb-3 tracking-wide">
        <a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-gray-600 transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-gray-600 transition-colors">Contact Support</a>
      </div>

    </div>
  );
}

export default Login;