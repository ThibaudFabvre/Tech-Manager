import { useState } from 'react';
import Button from '../../atoms/Button/Button';
import { validateHTML } from '../../../utils/validators';

function ComponentAdder() {
  const [htmlCode, setHTMLCode] = useState('');
  return (
    <>
      <h5 style={{ marginBottom: 18, marginTop: 24, fontSize: 18 }}>
        Enter new Element HTML
      </h5>
      <textarea
        style={{ width: '100%', height: 160 }}
        onChange={(e) => {
          return setHTMLCode(e.target.value);
        }}
        value={htmlCode}
      />
      <Button
        text="Add Component"
        onClick={() => {
          const htmlIsValid = htmlCode.length > 0 && validateHTML(htmlCode);
          if (htmlIsValid) {
            const userComponentsContainer = document.getElementById(
              'companyComponents',
            ) as HTMLElement;
            userComponentsContainer.innerHTML += htmlCode;
          }
        }}
      />
    </>
  );
}

export default ComponentAdder;
