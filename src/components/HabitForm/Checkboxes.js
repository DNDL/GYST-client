import React from 'react';

export default function Checkboxes() {
  return (
    <fieldset>
      <legend>Track on which days:</legend>
      <label>
        S
        <input type="checkbox" name="sunday" value="sunday" />
      </label>
      <label>
        M
        <input type="checkbox" name="monday" value="monday" />
      </label>
      <label>
        T
        <input type="checkbox" name="tueday" value="tueday" />
      </label>
      <label>
        W
        <input type="checkbox" name="wednesday" value="wednesday" />
      </label>
      <label>
        Th
        <input type="checkbox" name="thursday" value="thursday" />
      </label>
      <label>
        F
        <input type="checkbox" name="friday" value="friday" />
      </label>
      <label>
        S
        <input type="checkbox" name="saturday" value="saturday" />
      </label>
    </fieldset>
  );
}
