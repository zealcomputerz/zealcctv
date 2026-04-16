[README.md](https://github.com/user-attachments/files/26783574/README.md)


readme\_content = '''# Zeal Computer \& CCTV Solutions - Professional Website



\## 🎯 Complete Business Website with Admin Panel



A modern, professional, and fully responsive CCTV sales and installation company website built with HTML, CSS, and JavaScript. Features an easy-to-use admin panel for managing products and viewing customer messages.



\---



\## 📁 File Structure



```

zeal-cctv-website/

├── index.html          # Main website (Homepage)

├── login.html          # Admin login page

├── dashboard.html      # Admin dashboard panel

├── style.css           # All styles (main + admin)

├── script.js           # All JavaScript functionality

└── README.md           # This file

```



\---



\## 🚀 Quick Start



\### 1. Setup

1\. Download all files to a folder on your computer

2\. Double-click `index.html` to view the website

3\. Or use a local server (VS Code Live Server, XAMPP, etc.)



\### 2. Access Admin Panel

1\. Go to `login.html`

2\. Login with:

&#x20;  - \*\*Username:\*\* `admin`

&#x20;  - \*\*Password:\*\* `1234`

3\. You'll be redirected to the dashboard



\---



\## 🎨 Features



\### Main Website

\- ✅ Full-screen hero section with professional background

\- ✅ Services showcase (Installation, Maintenance, Remote Monitoring)

\- ✅ Dynamic product catalog with prices in LKR (Rs.)

\- ✅ About section with company info

\- ✅ Contact form with localStorage storage

\- ✅ WhatsApp floating button

\- ✅ Mobile responsive design

\- ✅ Smooth scroll animations



\### Admin Panel

\- ✅ Secure login system (localStorage based)

\- ✅ Add new products with image URL

\- ✅ Edit existing products

\- ✅ Delete products

\- ✅ View customer messages

\- ✅ Image preview before saving

\- ✅ Responsive admin interface



\---



\## 📸 How to Add/Change Product Images



\### Method 1: Using Unsplash (Recommended)

1\. Go to \[unsplash.com](https://unsplash.com)

2\. Search for "security camera" or "CCTV"

3\. Click on an image you like

4\. Click "Download" or right-click → "Copy image address"

5\. Paste the URL in the admin panel



\### Method 2: Using Pexels

1\. Go to \[pexels.com](https://pexels.com)

2\. Search for security camera images

3\. Click "Free Download" or copy image URL

4\. Paste in the admin panel



\### Method 3: Using Your Own Images

1\. Upload images to any image hosting service (Imgur, Cloudinary, etc.)

2\. Copy the direct image URL

3\. Paste in the admin panel



\### Example Image URLs (Ready to Use):

```

https://images.unsplash.com/photo-1581092921461-7d65ca45d9c3?w=400

https://images.unsplash.com/photo-1590608897129-79da98d15969?w=400

https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?w=400

```



\---



\## 💾 Data Storage



All data is stored in your browser's \*\*localStorage\*\*:

\- `zealProducts` - Product catalog

\- `zealMessages` - Contact form submissions

\- `zealAdminLoggedIn` - Admin session



\### ⚠️ Important Notes:

\- Data persists only in the current browser

\- Clearing browser data will erase all products and messages

\- For production use, migrate to a real database (Firebase, MySQL, etc.)



\---



\## 🔧 Customization Guide



\### Change Company Information

Edit these sections in `index.html`:

\- Line 15: Company name in `<title>`

\- Line 25: Logo text

\- Line 45: Hero title and subtitle

\- Line 150-180: About section content

\- Line 200-230: Contact information



\### Change Colors

Edit `style.css` root variables:

```css

:root {

&#x20;   --primary-color: #0f172a;    /\* Dark blue \*/

&#x20;   --accent-color: #3b82f6;     /\* Blue accent \*/

&#x20;   --success: #10b981;          /\* Green \*/

&#x20;   --danger: #ef4444;          /\* Red \*/

}

```



\### Change Contact Details

Find and replace in `index.html`:

\- Address: Line 203

\- Phone: Line 208

\- Email: Line 213

\- WhatsApp: Line 308 (change the number in the href)



\---



\## 📱 Responsive Breakpoints



\- \*\*Desktop:\*\* 1200px+

\- \*\*Tablet:\*\* 768px - 1199px

\- \*\*Mobile:\*\* < 768px



\---



\## 🛡️ Security Notes



This is a \*\*frontend-only\*\* demo. For production:



1\. \*\*Replace localStorage auth\*\* with server-side authentication

2\. \*\*Add form validation\*\* on server side

3\. \*\*Implement CSRF protection\*\*

4\. \*\*Use HTTPS\*\* for all connections

5\. \*\*Add rate limiting\*\* for login attempts

6\. \*\*Sanitize all inputs\*\* to prevent XSS



\---



\## 🔄 Backup \& Restore Data



\### Export Data:

Open browser console (F12) and run:

```javascript

// Export products

console.log(JSON.stringify(localStorage.getItem('zealProducts')));



// Export messages

console.log(JSON.stringify(localStorage.getItem('zealMessages')));

```



\### Import Data:

```javascript

// Import products

localStorage.setItem('zealProducts', '\[your-json-here]');



// Import messages

localStorage.setItem('zealMessages', '\[your-json-here]');

```



\---



\## 🐛 Troubleshooting



\### Products not showing?

1\. Check browser console for errors

2\. Verify localStorage is enabled

3\. Try resetting: `localStorage.removeItem('zealProducts')` then refresh



\### Can't login?

1\. Clear localStorage: `localStorage.clear()`

2\. Refresh and try again with admin/1234



\### Images not loading?

1\. Check if URL is direct image link (ends with .jpg, .png, etc.)

2\. Try a different image host

3\. Check browser console for CORS errors



\---



\## 📞 Support



For technical support or customization:

\- Check browser console for error messages

\- Verify all files are in the same folder

\- Ensure you have a modern browser (Chrome, Firefox, Edge)



\---



\## 📄 License



This project is created for educational and business use. Feel free to modify and use for your CCTV business.



\---



\## 🎉 Next Steps



To put this website online:



1\. \*\*Free Options:\*\*

&#x20;  - GitHub Pages

&#x20;  - Netlify

&#x20;  - Vercel

&#x20;  - Surge.sh



2\. \*\*Paid Hosting:\*\*

&#x20;  - Any shared hosting with cPanel

&#x20;  - VPS (DigitalOcean, Linode)

&#x20;  - Cloud hosting (AWS, Google Cloud)



3\. \*\*Add Backend (Optional):\*\*

&#x20;  - Firebase (free tier available)

&#x20;  - Supabase (PostgreSQL)

&#x20;  - MongoDB Atlas



\---



\*\*Built with ❤️ for Zeal Computer \& CCTV Solutions\*\*

'''



\# Save the README file

with open('/mnt/kimi/output/README.md', 'w', encoding='utf-8') as f:

&#x20;   f.write(readme\_content)



print("✅ README.md created successfully!")

print(f"File size: {len(readme\_content)} characters")

print("\\n" + "="\*60)

print("🎉 ALL FILES CREATED SUCCESSFULLY!")

print("="\*60)

print("\\n📁 Files in /mnt/kimi/output/:")

print("   1. index.html      - Main website")

print("   2. login.html      - Admin login")

print("   3. dashboard.html  - Admin panel")

print("   4. style.css       - All styles")

print("   5. script.js       - All functionality")

print("   6. README.md       - Documentation")

print("\\n🔑 Default Admin Login:")

print("   Username: admin")

print("   Password: 1234")

print("\\n💡 To test: Open index.html in your browser!")



