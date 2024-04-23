import React, { useEffect } from 'react';

function MailchimpForm() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    script.onload = function () {
        // eslint-disable-next-line
      window.fnames = new Array();
      // eslint-disable-next-line
      window.ftypes = new Array();
      window.fnames[0]='EMAIL'; window.ftypes[0]='email';
      window.fnames[1]='FNAME'; window.ftypes[1]='text';
      window.fnames[2]='LNAME'; window.ftypes[2]='text';
      // Add additional field mappings here if necessary
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="mc_embed_signup">
      <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
      <style>
        {`#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}`}
      </style>
      <form action="https://cortexflex.us18.list-manage.com/subscribe/post?u=2d8ae6e7c725015ed250cb949&amp;id=5267b99614&amp;f_id=001b1ce1f0" 
            method="post" 
            id="mc-embedded-subscribe-form" 
            name="mc-embedded-subscribe-form" 
            className="validate" 
            target="_blank"
            noValidate>
        <div id="mc_embed_signup_scroll">
          <h2>Subscribe to Our Newsletter</h2>
          <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
            <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-FNAME">First Name</label>
            <input type="text" name="FNAME" id="mce-FNAME" />
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-LNAME">Last Name</label>
            <input type="text" name="LNAME" id="mce-LNAME" />
          </div>
          {/* Additional fields can be added here */}
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input type="text" name="b_2d8ae6e7c725015ed250cb949_5267b99614" tabIndex="-1" />
          </div>
          <div>
            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default MailchimpForm;