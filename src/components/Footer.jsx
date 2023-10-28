function Footer() {
  return (
    <footer className=" text-black bg-slate-50 py-10 container mx-auto">

      <div className="flex flex-wrap justify-between">
        <div>
          <h3 className="text-xl font-bold mb-3">Over</h3>
          <ul className="list-none text-slate-500 p-0 m-0">
            <li>Via Yelp</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Investors</li>
            <li>Trust & Safety</li>
            <li>Content Guidelines</li>
            <li>Terms of Use & Imprint</li>
            <li>Data protection</li>
            <li>AdChoices</li>
            <li>Manage cookies</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3">Discover</h3>
          <ul className="list-none text-slate-500 p-0 m-0">
            <li>Collections</li>
            <li>Forum</li>
            <li>Events</li>
            <li>Yelp Blog</li>
            <li>Help</li>
            <li>Yelp on your cell phone</li>
            <li>Developer</li>
            <li>RSS</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3">Yelp for Business</h3>
          <ul className="list-none text-slate-500 p-0 m-0">
            <li>Yelp for Business</li>
            <li>Business Owner Login</li>
            <li>Take over your Yelp listing</li>
            <li>Advertise on Yelp</li>
            <li>Company success stories</li>
            <li>Help for business owners</li>
            <li>Yelp Blog for Business</li>
          </ul>
        </div>
        <div className=" md:w-1/4">
          <h3 className="text-xl font-bold mb-3">Languages</h3>
          <ul className="list-none text-slate-500 p-0 m-0">
            <li>German</li>
          </ul>

          <h3 className="text-xl font-bold mb-3">Countries</h3>
          <ul className="list-none text-slate-500 p-0 m-0">
            <li>German</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
