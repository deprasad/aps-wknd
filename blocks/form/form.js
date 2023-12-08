main .form {
    background-color: var(--color-white);
    padding: var(--spacing-s);
    border-radius: var(--card-border-radius-l);
    filter: var(--image-filter-drop-shadow-small);
    border: solid 1px var(--bg-color-grey);
  }
  
  main .form h2 {
    padding: var(--spacing-s) 0;
    font-size: var(--type-heading-l-lh);
  }
  
  main .form h3 {
    padding-top: var(--spacing-s);
    font-size: var(--type-heading-m-size);
  }
  
  main .form input,
  main .form textarea,
  main .form select {
    border: solid 1px var(--bg-color-grey);
    padding: var(--spacing-xxs) var(--spacing-xs);
    width: 100%;
    max-width: 50rem;
    box-sizing: border-box;
    border-radius: var(--input-border-radius);
    font-size: var(--type-body-s-size);
    line-height: var(--type-body-s-lh);
    font-family: var(--body-font-family);
  }
  
  main .form textarea {
    min-height: 100px;
  }
  
  main .form input:hover,
  main .form select:hover {
    border-color: var(--color-font-grey);
  }
  
  main .form label {
    display: block;
    padding-bottom: var(--spacing-xxs);
    box-sizing: border-box;
    font-size: var(--type-body-s-size);
    line-height: var(--type-body-s-lh);
  }
  
  main .form label.required::after {
    content: "*";
    color: var(--color-black);
    padding-left: var(--spacing-xxxs);
  }
  
  main .form .field-wrapper {
    margin-bottom: var(--spacing-m);
  }
  
  main .form .form-checkbox-wrapper {
    display: flex;
    align-items: center;
    margin: var(--spacing-xs) 0;
  }
  
  main .form .form-checkbox-wrapper input[type='checkbox'] {
    appearance: none;
  
    /* stylelint-disable */
    -webkit-appearance: none;
    -moz-appearance: none;
  
    /* stylelint-enable */
    height: 20px;
    width: 20px;
    position: relative;
    border: unset;
    padding: unset;
    margin-right: var(--spacing-xxs);
    margin-left: 0;
  }
  
  main .form .form-checkbox-wrapper input[type='checkbox']::after {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    content: ' ';
    background: url('./checkbox.svg');
    background-size: contain;
  }
  
  main .form .form-checkbox-wrapper input[type='checkbox']:checked::after {
    background: url('./checkbox-checked.svg');
    background-size: contain;
    content: ' ';
  }
  
  main .form .form-checkbox-wrapper label {
    display: block;
    font-size: var(--type-body-xxs-size);
    line-height: var(--type-body-xxs-lh);
    padding-bottom: 0;
  }
  
  main .form-legal-wrapper p {
    font-size: var(--type-body-xxs-size);
    line-height: var(--type-body-xxs-lh);
    font-style: italic;
  }
  
  main .form button {
    font-family: var(--body-font-family);
  }
  
  @media screen and (min-width: 900px) {
    main .form {
      padding: var(--spacing-ml);
    }
    
    main .form .field-wrapper {
      display: flex;
    }
  
    main .form label {
      width: 72%;
    }
  }