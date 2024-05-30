## EMI Calculator app 💰

**HTML Design** 📄

- Create `container div`
- Create `form-container div` inside `container div`
- Create title using `h1` inside `form-container div`
- Create `form-group div` inside `form-container div`
- Create `label` and `input` inside `form-group div`
- Create `button` for `calculate` and `reset` inside `form-group div`
- Create `h2` for displaying `EMI Amount`

**CSS Design** 🌈

- style the `container div`
- styel the `form-container div`
- style the `h1`
- style the `form-group div`
- style the `label` and `input`
- style the `button` and `h2`

**javascript** ｡🇯‌🇸‌

- Get the three `input tag` using `getElementById` such as `principal`,`annualInterestRate`,`tenureInYears`
- Calculate interestValue using `(P*R*(1+R)^n)/((1+R)^n - 1)`
- `P`Principal `R`monthlyInterestRate `n` numberOfMonths
- Calculate EMI using above formula
- Get the `h2` for displaying `EMI Amount` using `getElementById`
- `onclick` event added in button
- Calculate `btn` triger `getEmi()` for calculating `EMI`
- Reset `btn` triger `resetEmi()` for erase input and output in the UI
