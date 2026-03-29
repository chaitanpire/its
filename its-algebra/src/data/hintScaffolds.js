/**
 * hintScaffolds.js
 * Three-tier hint system for every question in the assessment bank.
 * Level 1: Conceptual (no score penalty)
 * Level 2: Procedural (−0.25 mastery penalty)
 * Level 3: Worked Example (−0.5 mastery penalty)
 */

export const HINT_SCAFFOLDS = {
  // ──────────── K01 ────────────
  K01_Q1: {
    L1: 'In algebra, letters always represent unknown numbers. They are called variables. Numbers are constants.',
    L2: 'Look only at the letters in the expression "14 − 3y". Which is a letter?',
    L3: 'In "14 − 3y": 14 is a constant, 3 is a coefficient (fixed number attached to the variable), and y is the variable — the letter representing the unknown.',
  },
  K01_Q2: {
    L1: 'Constants are fixed numbers — they never change. Variables are letters that represent unknowns.',
    L2: 'In "5 + n", circle the number. Plain numbers with no letters are constants.',
    L3: '5 is a plain number → constant. n is a letter → variable. The constant in 5 + n is 5.',
  },
  K01_Q3: {
    L1: 'Count how many DIFFERENT letters appear in the expression.',
    L2: 'Go through each term: 3a (letter a), 2b (letter b), −7 (no letter). How many distinct letters?',
    L3: 'a is one variable. b is a second variable. The number −7 has no letter. Total: 2 variables.',
  },
  K01_Q4: {
    L1: '"Decreased by 12" means we subtract 12. Start with the unknown number.',
    L2: 'Let n = "a number". "Decreased by 12" → subtract 12 from n. Write: n ? 12.',
    L3: '"A number decreased by 12" = n − 12. We start with the unknown (n) and subtract 12 from it.',
  },

  K01_Q5: {
    L1: 'A variable is always a letter. Numbers — even when attached to a letter — are not variables.',
    L2: 'In 2p − 9: 2 is a number, p is a letter, 9 is a number. Which of those is the variable?',
    L3: 'p is the only letter → it is the variable. 2 is the coefficient; 9 is the constant. Answer: p.',
  },
  K01_Q6: {
    L1: 'Think about the word "variable" — it comes from "vary", meaning to change. What can change value?',
    L2: 'A variable like x can equal 3 today and 7 tomorrow. Is it a fixed number, an operation, or an unknown?',
    L3: 'Variables represent unknown or changing quantities. 5 is fixed (constant); + is an operation; variables are flexible unknowns.',
  },
  K01_Q7: {
    L1: 'Variables are letters. Constants are plain numbers. One of these options is a number, not a letter.',
    L2: 'Look at x, n, t, and 9. Three are letters used as unknowns. Which one is just a plain number?',
    L3: '9 is a plain number — it has a fixed value. x, n, and t are all letters representing unknowns. Answer: 9.',
  },
  K01_Q8: {
    L1: 'Constants are standalone numbers with no variable attached. Coefficients are numbers glued to a variable.',
    L2: 'In 5x − 3 + 2y: 5 multiplies x (coefficient), 2 multiplies y (coefficient), −3 stands alone. How many standalone numbers?',
    L3: '5 is attached to x → coefficient. 2 is attached to y → coefficient. −3 has no variable → it is the only constant. Answer: 1.',
  },
  K01_Q9: {
    L1: 'Count the letters (variables) and standalone numbers (constants) in each option separately.',
    L2: 'You need exactly 1 letter and 1 standalone number. Check each option: a+b (2 letters, 0 numbers), 3 (0 letters, 1 number)…',
    L3: 'n + 7: n is 1 variable, 7 is 1 constant. Exactly one of each. The other options have too many or too few.',
  },
  K01_Q10: {
    L1: 'A constant is any plain number in the expression with no variable beside it. There may be more than one.',
    L2: 'Go through each part of 10 − k + 4: 10 is a number, k is a letter, 4 is a number. Which are constants?',
    L3: '10 has no variable → constant. k is a letter → variable. 4 has no variable → constant. Both 10 and 4 are constants.',
  },
  K01_Q11: {
    L1: 'Count the distinct letters for variables and standalone numbers for constants in p + q − 5.',
    L2: 'Letters: p and q — that is 2. Standalone numbers: −5 — that is 1. Does the statement match?',
    L3: 'p and q are 2 variables. −5 is 1 constant. The statement says "two variables and one constant" → True.',
  },
  K01_Q12: {
    L1: 'Count letters for variables and isolated numbers for constants in each option until you find 3 and 2.',
    L2: 'Check a + b − c + 4 − 1: letters are a, b, c (count = 3). Numbers are 4 and 1 (count = 2). Does that match?',
    L3: 'a, b, c → 3 variables ✓. 4 and 1 → 2 constants ✓. The other options have wrong counts. Answer: a + b − c + 4 − 1.',
  },
  K01_Q13: {
    L1: '"The square of y" means y gets an exponent of 2. Make sure you square the right variable.',
    L2: 'Break the phrase: "a number x" → x. "Square of y" → y². "Minus 8" → −8. Now join them.',
    L3: '"Sum of x and y²" = x + y². "Minus 8" = −8. Full expression: x + y² − 8. Note: it is y² not x².',
  },
  K01_Q14: {
    L1: 'In any algebraic term: the letter is the variable, the number multiplying it is the coefficient, a lone number is a constant.',
    L2: 'In 3r − 4s + 7: r and s are letters. 3 and 4 multiply letters. 7 stands alone. Classify each.',
    L3: 'r and s (letters) = variables. 3 and 4 (numbers × letters) = coefficients. 7 (alone) = constant. Full correct statement: r and s are variables; 3 and 4 are coefficients; 7 is a constant.',
  },

  // ──────────── K02 ────────────
  K02_Q1: {
    L1: 'The coefficient is the number directly multiplied by the variable. If no number is written, there\'s a special rule.',
    L2: 'In x + 7, the x term is just "x" with no visible number. But what times x gives x?',
    L3: '1 × x = x. So x alone has an invisible coefficient of 1. The coefficient of x in x + 7 is 1.',
  },
  K02_Q2: {
    L1: 'Terms are separated by + or − signs. Count the distinct parts.',
    L2: 'Split 4x² − 3x + 7 at the + and − signs. Piece 1, Piece 2, Piece 3...',
    L3: 'Part 1: 4x². Part 2: −3x. Part 3: +7 (constant). Three terms total.',
  },
  K02_Q3: {
    L1: 'The coefficient includes the sign (+ or −) that comes before it.',
    L2: 'The term with y is −5y. The minus sign belongs to the coefficient. What number, including the sign, is multiplied with y?',
    L3: 'In −5y, the coefficient is −5. The minus sign is part of the coefficient, not separate from it.',
  },
  K02_Q4: {
    L1: 'Leading coefficient means the coefficient of the FIRST term. Count the terms and check the first one.',
    L2: 'Which option has 3 terms AND starts with 4 as the coefficient of its highest-power term?',
    L3: '4x² − 2x + 1: 3 terms ✓. Leading term = 4x², coefficient = 4 ✓. This is the answer.',
  },

  K02_Q5: {
    L1: 'The coefficient is the number written directly in front of the variable.',
    L2: 'In 6y, the number 6 is sitting right next to y. That number is multiplying y.',
    L3: '6y means 6 × y. The coefficient of y is 6. Answer: 6.',
  },
  K02_Q6: {
    L1: 'Terms are the separate parts of an expression, divided by + or − signs.',
    L2: 'Split 2a + 3b at the + sign: first part is 2a, second part is 3b. Count the parts.',
    L3: '2a is one term. 3b is a second term. Total: 2 terms. Answer: 2.',
  },
  K02_Q7: {
    L1: 'When a variable has a minus sign in front with no number, there is an invisible −1 as the coefficient.',
    L2: '−x means (−1) × x. The −1 is the coefficient — the negative sign is part of it.',
    L3: '−x = −1 × x. So the coefficient of x in −x is −1. Answer: −1.',
  },
  K02_Q8: {
    L1: 'Count the parts separated by + or − in each option. You need exactly two parts.',
    L2: 'Check 3x + 4: two parts (3x and 4). Check 5x² + 3x + 1: three parts. Check 7 and 2x: one part each.',
    L3: '3x + 4 splits into 3x (one term) and 4 (one term) → exactly 2 terms. Answer: 3x + 4.',
  },
  K02_Q9: {
    L1: 'The leading term is the one with the highest exponent. Its coefficient is the leading coefficient.',
    L2: 'In 7x³ − 2x + 5: the term with the highest power is 7x³. What is the number in front of x³?',
    L3: '7x³ has the highest power (3). The number in front is 7. Leading coefficient = 7. Answer: 7.',
  },
  K02_Q10: {
    L1: 'Count the parts of 9 − 2x separated by the − sign.',
    L2: '9 − 2x has two parts: 9 (a standalone number) and 2x (a variable term). Count them.',
    L3: 'Part 1: 9 (constant). Part 2: −2x (variable term). Total: 2 terms. Answer: 2.',
  },
  K02_Q11: {
    L1: 'The leading coefficient belongs to the term with the highest power. It must equal −3 (negative!).',
    L2: 'Look for the option whose first term (highest power) has −3 in front. Check each x² coefficient.',
    L3: '−3x² + 2x − 1: the first term is −3x², so the leading coefficient is −3 ✓. Answer: −3x² + 2x − 1.',
  },
  K02_Q12: {
    L1: 'Split the expression at every + and − sign and count each piece separately.',
    L2: 'x² + 3x − 4 + y: split at +, −, +. You get: x², 3x, −4, y. Count the pieces.',
    L3: 'Piece 1: x². Piece 2: 3x. Piece 3: −4. Piece 4: y. Total: 4 terms. Answer: 4.',
  },

  // ──────────── K03 ────────────
  K03_Q1: {
    L1: 'Substitute the given value for the variable, then use PEMDAS: multiply before subtracting.',
    L2: 'Replace a with 3 in 4a − 2: write 4(3) − 2. Now multiply first: what is 4 × 3?',
    L3: '4(3) − 2 = 12 − 2 = 10. Multiply first (12), then subtract (−2).',
  },
  K03_Q2: {
    L1: 'Replace m with 5 everywhere it appears. Then simplify left to right with PEMDAS.',
    L2: '3m + m − 2 with m=5: first, 3(5) = ?, and just (5) = ?. Then add/subtract.',
    L3: '3(5) + 5 − 2 = 15 + 5 − 2 = 18.',
  },
  K03_Q3: {
    L1: 'When you substitute, the exponent applies to x first. Then multiply by 2.',
    L2: 'Replace x with 4: 2(4)² + 3. Calculate (4)² first. Then multiply by 2. Then add 3.',
    L3: '2(4)² + 3 = 2 × 16 + 3 = 32 + 3 = 35.',
  },
  K03_Q4: {
    L1: 'Substitute n = −2 carefully using parentheses: (−2)² and −3(−2). A negative squared gives positive.',
    L2: '(−2)² = 4 (positive!). −3(−2) = +6 (negative × negative = positive). Now add them with +5.',
    L3: '(−2)² − 3(−2) + 5 = 4 − (−6) + 5 = 4 + 6 + 5 = 15.',
  },

  K03_Q5: {
    L1: 'To evaluate, replace the variable with the given number and then calculate.',
    L2: 'Replace x with 2 in 5x: write 5 × 2. Now multiply.',
    L3: '5x with x = 2: 5 × 2 = 10. Answer: 10.',
  },
  K03_Q6: {
    L1: 'Substitute the given value for x, then perform the operation shown.',
    L2: 'Replace x with 4 in x + 6: write 4 + 6. Now add.',
    L3: 'x + 6 with x = 4: 4 + 6 = 10. Answer: 10.',
  },
  K03_Q7: {
    L1: 'Replace the variable, then follow order of operations — multiply before adding.',
    L2: 'Replace a with 4 in 3a + 2: write 3 × 4 + 2. Multiply first, then add.',
    L3: '3(4) + 2 = 12 + 2 = 14. Multiply 3 × 4 first, then add 2. Answer: 14.',
  },
  K03_Q8: {
    L1: 'Substitute x, then use order of operations: handle the multiplication before the subtraction.',
    L2: 'Replace x with 2 in 6 − 2x: write 6 − 2 × 2. Compute 2 × 2 first.',
    L3: '6 − 2(2) = 6 − 4 = 2. Multiply 2 × 2 = 4 first, then subtract from 6. Answer: 2.',
  },
  K03_Q9: {
    L1: 'Work inside brackets first, then multiply. That is the order of operations rule.',
    L2: 'Replace x with 5 inside: 2(5 + 3). Add inside the brackets first: 5 + 3 = ?. Then multiply by 2.',
    L3: '2(5 + 3) = 2(8) = 16. Brackets first: 5 + 3 = 8. Then × 2 = 16. Answer: 16.',
  },
  K03_Q10: {
    L1: 'A negative number squared is always positive. Apply the exponent before subtracting.',
    L2: 'Replace x with −3: (−3)² − 4. Compute (−3)² first: negative × negative = positive.',
    L3: '(−3)² = 9 (positive!). Then 9 − 4 = 5. Answer: 5.',
  },
  K03_Q11: {
    L1: 'Apply the exponent to x first, then multiply by the coefficient, then subtract the second term.',
    L2: 'Replace x with 2: 3(2²) − 2(2). Work out 2² first, then multiply each term separately.',
    L3: '2² = 4. Then 3 × 4 = 12. Then 2 × 2 = 4. Finally 12 − 4 = 8. Answer: 8.',
  },
  K03_Q12: {
    L1: 'Substitute x = −1 carefully. Squaring a negative gives positive; multiplying by a negative flips sign.',
    L2: 'Replace x with −1: 2(−1)² + 3(−1) − 1. Compute (−1)² first, then each term.',
    L3: '(−1)² = 1. So: 2(1) + 3(−1) − 1 = 2 − 3 − 1 = −2. Answer: −2.',
  },

  // ──────────── K04 ────────────
  K04_Q1: {
    L1: 'Like terms must have the SAME variable AND the SAME exponent. Check both.',
    L2: '5x² has x raised to the power 2. Look for another term with exactly x².',
    L3: '−2x²: same variable x, same exponent 2 → like term. 5x has x¹ (different). This is the answer.',
  },
  K04_Q2: {
    L1: 'For a pair of like terms: both variables must match AND both exponents must match.',
    L2: 'Compare 3x and −5x: same variable? Same exponent? If both yes → like terms.',
    L3: '3x = 3×x¹. −5x = −5×x¹. Same variable (x), same power (1). They are like terms.',
  },
  K04_Q3: {
    L1: 'Group terms by their variable. How many different variable types are there?',
    L2: 'Identify terms with a and terms with b separately.',
    L3: 'a-terms: 3a and −a. b-terms: 2b and 5b. Two distinct groups.',
  },
  K04_Q4: {
    L1: 'Check the exponent on EACH variable separately in both terms.',
    L2: '3xy²: x has exponent 1, y has exponent 2. 5x²y: x has exponent 2, y has exponent 1. Do these match?',
    L3: 'xy² ≠ x²y because the exponents on x and y are swapped. They\'re NOT like terms.',
  },

  K04_Q5: {
    L1: 'Like terms must share the same variable AND the same exponent — both must match.',
    L2: '7y has variable y with exponent 1. Which option also has y to the power 1?',
    L3: '−3y has y¹ — same variable, same exponent as 7y. The others change the exponent or variable. Answer: −3y.',
  },
  K04_Q6: {
    L1: 'Like terms have the same variable. NOT like terms have different variables or different exponents.',
    L2: 'Check each pair: 2a and 5a (same letter?), −3x and x (same letter?), 4x and 4y (same letter?).',
    L3: '4x has variable x; 4y has variable y — different letters → NOT like terms. The other pairs all share the same letter. Answer: 4x and 4y.',
  },
  K04_Q7: {
    L1: 'For two terms to be like terms, both the variable AND the exponent must be identical.',
    L2: 'Compare 5x² and −3x²: same variable (x)? Same exponent (2)? Check the other pairs the same way.',
    L3: '5x² and −3x²: both have x², so they are like terms ✓. The other pairs differ in exponent or variable. Answer: 5x² and −3x².',
  },
  K04_Q8: {
    L1: 'Each unique variable-and-exponent combination is its own group. Count how many distinct types exist.',
    L2: 'List the terms: x (x¹), y (y¹), x² (x²), y² (y²). Are any of these the same type?',
    L3: 'x¹, y¹, x², y² — all four are different combinations of variable and exponent. Each is its own group. Answer: 4.',
  },
  K04_Q9: {
    L1: 'A like term to 6ab must contain both variables a AND b, each to the same power.',
    L2: '6ab has a¹b¹. Which option also has both a and b, each with exponent 1?',
    L3: '−2ab has a¹b¹ — same variables, same exponents as 6ab ✓. 6a is missing b. 6b is missing a. ab² has wrong exponent on b. Answer: −2ab.',
  },
  K04_Q10: {
    L1: 'An expression with ONLY like terms means every single term must be the same type.',
    L2: 'Check each option for mixed types: 2x + 3x − 5x (all x?), x + y + x (x and y mixed?)…',
    L3: '2x + 3x − 5x: every term is x¹ → all like terms ✓. The others mix variables or exponents. Answer: 2x + 3x − 5x.',
  },
  K04_Q11: {
    L1: 'For multi-variable terms, every variable and its exponent must match exactly.',
    L2: '4x²y has x² and y¹. Which option also has exactly x² and y¹ in the same term?',
    L3: '−3x²y has x²y¹ — same as 4x²y ✓. 4xy² swaps the exponents. x²y and xy miss something. Answer: 4x²y and −3x²y.',
  },
  K04_Q12: {
    L1: 'Multiplication is commutative — the order you write variables does not change the term.',
    L2: '2x²y means 2 × x² × y. 2yx² means 2 × y × x². Is the result the same?',
    L3: '2x²y = 2 × x² × y = 2 × y × x² = 2yx². Order of multiplication never matters. They ARE like terms. Answer: True.',
  },

  // ──────────── K05 ────────────
  K05_Q1: {
    L1: 'Only combine terms with the exact same variable. m-terms combine with m-terms only.',
    L2: 'Which terms have m? Which have n? Combine only within each group.',
    L3: 'm-group: 3m − m = 2m. n-group: 4n stays. Result: 2m + 4n.',
  },
  K05_Q2: {
    L1: 'Group the x-terms together and the constants together separately.',
    L2: 'x-terms: 5x + 2x = ? Constants: −3 + 4 = ?',
    L3: '5x + 2x = 7x. −3 + 4 = 1. Final: 7x + 1.',
  },
  K05_Q3: {
    L1: 'Three groups: a-terms, b-terms, constant terms. Combine each group.',
    L2: 'a: 4a − 2a = ? b: 2b + b = ? Constant: −3 (no like term).',
    L3: '4a − 2a = 2a. 2b + b = 3b (b = 1b). Constant: −3. Result: 2a + 3b − 3.',
  },
  K05_Q4: {
    L1: 'Three groups: x²-terms, x-terms, constant. Identify and combine each.',
    L2: 'x²: 3x² − x² = ? x: 2x − 5x = ? Constant: +4.',
    L3: '3x² − x² = 2x². 2x − 5x = −3x. Constant = +4. Result: 2x² − 3x + 4.',
  },

  K05_Q5: {
    L1: 'When subtracting like terms, subtract the coefficients and keep the variable.',
    L2: '6x − 2x: both terms have x. Subtract the numbers in front: 6 − 2 = ?',
    L3: '6x − 2x = (6 − 2)x = 4x. Answer: 4x.',
  },
  K05_Q6: {
    L1: 'When adding like terms, add the coefficients and keep the variable unchanged.',
    L2: '2y + 3y: both have y. Add the numbers in front: 2 + 3 = ?',
    L3: '2y + 3y = (2 + 3)y = 5y. Answer: 5y.',
  },
  K05_Q7: {
    L1: 'Combine only the a-terms. The standalone number has no like term and stays as is.',
    L2: '7a − 3a + 2: combine the a-terms first → ? Then bring along the +2.',
    L3: '7a − 3a = 4a. The +2 has no like term. Final: 4a + 2. Answer: 4a + 2.',
  },
  K05_Q8: {
    L1: 'Group x-terms together and number terms together, then simplify each group.',
    L2: 'x-terms: 5x − 3x = ? Number terms: 2 + 4 = ? Combine the results.',
    L3: '5x − 3x = 2x. 2 + 4 = 6. Final: 2x + 6. Answer: 2x + 6.',
  },
  K05_Q9: {
    L1: 'Treat x-terms and y-terms as completely separate groups — never combine them.',
    L2: 'x-terms: 3x + 2x = ? y-terms: 4y − y = ? Write both results together.',
    L3: '3x + 2x = 5x. 4y − y = 3y (remember: y = 1y). Final: 5x + 3y. Answer: 5x + 3y.',
  },
  K05_Q10: {
    L1: 'All three terms have x² — treat them just like plain numbers and add/subtract the coefficients.',
    L2: '2x² + 3x² − x²: add and subtract the numbers in front: 2 + 3 − 1 = ? Keep x².',
    L3: '(2 + 3 − 1)x² = 4x². Answer: 4x².',
  },
  K05_Q11: {
    L1: 'Group x²-terms separately from x-terms — different exponents mean different groups.',
    L2: 'x²-group: x² + x² = ? x-group: 2x − x = ? Keep the two results separate.',
    L3: 'x² + x² = 2x². 2x − x = x (1x). Final: 2x² + x. Answer: 2x² + x.',
  },
  K05_Q12: {
    L1: 'Group a-terms together and constant terms together, then simplify each group.',
    L2: 'a-terms: 4a − 2a = ? Constants: 3 − 5 = ? Watch the sign on the constants.',
    L3: '4a − 2a = 2a. 3 − 5 = −2. Final: 2a − 2. Answer: 2a − 2.',
  },

  // ──────────── K06 ────────────
  K06_Q1: {
    L1: 'An equation always has an equals sign (=). Scan each option for the = symbol.',
    L2: 'Which option contains the = symbol, making a statement about equality?',
    L3: 'x − 4 = 10 has an = sign. The others (x−14, 2x+5, x²) have no = sign → expressions.',
  },
  K06_Q2: {
    L1: 'Think: what one symbol defines an equation? What does an equation DO that an expression doesn\'t?',
    L2: 'An equation makes a complete statement about two things being equal. What symbol expresses equality?',
    L3: 'The equals sign (=) is THE defining feature of an equation. Without =, it\'s an expression.',
  },
  K06_Q3: {
    L1: 'Check for an equals sign first. Then think: how many values of x would satisfy this?',
    L2: 'It has =, so it\'s an equation. Try x=0, x=5, x=100. Does it hold for all of them?',
    L3: 'It\'s always true (2x+3 = 2x+3 for any x) → an identity equation with infinitely many solutions.',
  },
  K06_Q4: {
    L1: 'To "solve" something means to find what value makes a statement TRUE. Which has a statement of equality?',
    L2: 'Look for the = sign. Only equations can be solved.',
    L3: '3x − 5 = 10 has =, making it a claim we can verify or falsify. The others are just expressions.',
  },

  // ──────────── K07 ────────────
  K07_Q1: {
    L1: 'Think of the equation as a balanced scale. Whatever you do to one side, you must do the same to the other.',
    L2: 'If you add 5 to the LEFT pan of a scale, what do you add to the RIGHT pan to keep it balanced?',
    L3: 'Add 5 to left → add 5 to right. Same operation, both sides. That\'s the balance principle.',
  },
  K07_Q2: {
    L1: 'Think about what an equals sign really means: two quantities that have equal value.',
    L2: 'An equals sign keeps two sides in a relationship of perfect equality. What physical object works the same way?',
    L3: 'A balanced scale: if both pans are equal, the pivot stays level. The = sign is that pivot.',
  },
  K07_Q3: {
    L1: 'Apply the SAME operation (×4) to both sides of x = 3.',
    L2: 'Left side: x × 4 = ? Right side: 3 × 4 = ?',
    L3: 'x × 4 = 4x. 3 × 4 = 12. New equation: 4x = 12.',
  },
  K07_Q4: {
    L1: 'The balance principle requires the SAME operation — identical type — on both sides.',
    L2: 'Dividing by 3 and multiplying by 3 are OPPOSITE operations. What happens to equality?',
    L3: 'If left becomes x/3 and right becomes 3x, they can no longer be equal. The equation is broken.',
  },

  // ──────────── K08 ────────────
  K08_Q1: {
    L1: 'The inverse of addition (+) is subtraction (−). Apply the inverse to isolate x.',
    L2: 'x has +7 attached. To remove it, subtract 7 from both sides.',
    L3: 'x + 7 − 7 = 15 − 7 → x = 8.',
  },
  K08_Q2: {
    L1: 'The inverse of subtraction (−) is addition (+). Use it to isolate y.',
    L2: 'y has −4. To undo it, add 4 to both sides.',
    L3: 'y − 4 + 4 = 10 + 4 → y = 14.',
  },
  K08_Q3: {
    L1: 'The equation is the same even when written with variable on the right. Solve normally.',
    L2: 'Rewrite as n + 8 = 15. What is the inverse of +8?',
    L3: 'n + 8 − 8 = 15 − 8 → n = 7.',
  },
  K08_Q4: {
    L1: 'x + (−3) is the same as x − 3. The inverse of subtracting 3 is adding 3.',
    L2: 'Add 3 to both sides of x + (−3) = −10.',
    L3: 'x + (−3) + 3 = −10 + 3 → x = −7.',
  },

  // ──────────── K09 ────────────
  K09_Q1: {
    L1: 'The inverse of multiplication is division. Divide both sides by the coefficient.',
    L2: 'y is multiplied by 4. Divide both sides by 4.',
    L3: '4y/4 = 20/4 → y = 5.',
  },
  K09_Q2: {
    L1: 'A fraction bar means division. To undo division, use multiplication.',
    L2: 'm is divided by 3. Multiply both sides by 3.',
    L3: '(m/3) × 3 = 6 × 3 → m = 18.',
  },
  K09_Q3: {
    L1: 'Divide both sides by the coefficient (−5). Careful with the sign!',
    L2: '−5p divided by −5 = p. What is 30 divided by −5?',
    L3: '−5p/(−5) = 30/(−5) → p = −6.',
  },
  K09_Q4: {
    L1: 'x is divided by −2. Multiply both sides by −2.',
    L2: '(x/−2) × (−2) = x. 7 × (−2) = ?',
    L3: 'x = 7 × (−2) = −14.',
  },

  // ──────────── K10 ────────────
  K10_Q1: {
    L1: 'p/4 means p is divided by 4. Undo division by multiplying.',
    L2: 'Multiply both sides by 4.',
    L3: '(p/4) × 4 = 2 × 4 → p = 8.',
  },
  K10_Q2: {
    L1: '−x means (−1) times x. Divide both sides by −1.',
    L2: '(−1)x = 9. Divide both sides by −1.',
    L3: '(−1)x / (−1) = 9 / (−1) → x = −9.',
  },
  K10_Q3: {
    L1: '3 is added to a. Subtract 3 from both sides.',
    L2: 'a + 3 = 11. Subtract 3: a = 11 − 3.',
    L3: '3 + a − 3 = 11 − 3 → a = 8.',
  },
  K10_Q4: {
    L1: '0.5 is the coefficient of n. Divide both sides by 0.5 (same as multiplying by 2).',
    L2: 'n = 12 ÷ 0.5. What is 12 ÷ 0.5?',
    L3: '0.5n / 0.5 = 12 / 0.5 → n = 24.',
  },

  // ──────────── K11 ────────────
  K11_Q1: {
    L1: 'Two-step equations: undo addition/subtraction first, then multiplication/division (SADMEP).',
    L2: 'Step 1: Subtract 1 from both sides → 2x = ? Step 2: Divide by 2.',
    L3: '2x + 1 − 1 = 9 − 1 → 2x = 8 → x = 4.',
  },
  K11_Q2: {
    L1: 'Undo the −3 first, then the ×2. Always add/subtract before dividing.',
    L2: 'Step 1: Add 3 → 2p = ? Step 2: Divide by 2.',
    L3: '2p − 3 + 3 = 7 + 3 → 2p = 10 → p = 5.',
  },
  K11_Q3: {
    L1: 'Undo the +2 first, then the ×3.',
    L2: 'Subtract 2 from both sides first. Then divide by 3.',
    L3: '3n + 2 − 2 = 14 − 2 → 3n = 12 → n = 4.',
  },
  K11_Q4: {
    L1: 'Isolate the x-term first (undo the 5), then isolate x (undo the −2).',
    L2: 'Step 1: Subtract 5 from both sides → −2x = ? Step 2: Divide by −2.',
    L3: '5 − 2x − 5 = 11 − 5 → −2x = 6 → x = 6/(−2) = −3.',
  },

  // ──────────── K12 ────────────
  K12_Q1: {
    L1: '"Less than" is a translation trap. "4 less than n" means START with n and subtract 4.',
    L2: 'Think: "4 less than my savings" means my savings minus 4. Apply this to n.',
    L3: '"4 less than a number (n)" = n − 4. Set equal to 10: n − 4 = 10.',
  },
  K12_Q2: {
    L1: 'Translate: "twice" = ×2, "increased by 5" = +5, "equals" = =. Set up the equation first.',
    L2: 'Equation: 2n + 5 = 19. Now solve using SADMEP.',
    L3: '2n + 5 − 5 = 19 − 5 → 2n = 14 → n = 7.',
  },
  K12_Q3: {
    L1: '"Tripled" = ×3, "minus 7" = −7, "equals 11". Set up: 3n − 7 = 11.',
    L2: 'Add 7 to both sides first. Then divide by 3.',
    L3: '3n − 7 + 7 = 11 + 7 → 3n = 18 → n = 6.',
  },
  K12_Q4: {
    L1: 'Let k = km travelled. Total cost = base + (rate per km × km). Set up the equation.',
    L2: '40 + 8k = 96. Subtract 40 first, then divide by 8.',
    L3: '40 + 8k − 40 = 96 − 40 → 8k = 56 → k = 7.',
  },
  // ──────────── K13 ────────────
  K13_Q1: {
    L1: '"Decreased by" always means subtract. The number you are reducing comes first.',
    L2: 'Let n = the number. "Decreased by 9" means remove 9 from n. Write: n ? 9.',
    L3: '"A number decreased by 9" = n − 9. The number (n) is first, then subtract 9.',
  },
  K13_Q2: {
    L1: 'Break the phrase into two parts: "twice a number" and "increased by 5". Translate each part.',
    L2: '"Twice a number" = 2n. "Increased by 5" = +5. Now join them.',
    L3: '"Twice a number" = 2n. "Increased by 5" adds 5: 2n + 5. No brackets needed here — we double THEN add.',
  },
  K13_Q3: {
    L1: '"Product of 4 and a number" means multiply. "Decreased by 7" means subtract. Build in two steps.',
    L2: 'Part 1: "product of 4 and n" = 4n. Part 2: "decreased by 7" = −7. Combine them.',
    L3: '"Product of 4 and n" = 4n. "Decreased by 7" means 4n − 7. The subtraction affects the WHOLE product, so no extra brackets.',
  },
  K13_Q4: {
    L1: '"The sum of a number and 6" means (n + 6). "Three times" multiplies that whole sum. Think: brackets!',
    L2: 'The sum (n+6) must be in brackets. "Three times the sum" = 3 × (n+6).',
    L3: '"The sum of n and 6" = (n+6). "Three times" that entire sum = 3(n+6). This is different from 3n+6 because the 3 multiplies BOTH n and 6.',
  },

  // ──────────── K14 ────────────
  K14_Q1: {
    L1: 'Substitute n = 4 into the expression 3n + 1. Remember: multiply before adding.',
    L2: 'Replace n with 4: 3×4 + 1. Calculate 3×4 first.',
    L3: '3×4 = 12. Then 12 + 1 = 13. Always multiply (3×n) before adding the constant.',
  },
  K14_Q2: {
    L1: 'Find the difference between any two consecutive terms. That gap is the common difference.',
    L2: '8 − 5 = 3, 11 − 8 = 3. The pattern adds 3 each time. What is 14 + 3?',
    L3: 'Common difference = 3. Each term = previous term + 3. 14 + 3 = 17.',
  },
  K14_Q3: {
    L1: 'Step 1: Find the common difference between terms. That tells you the coefficient of n.',
    L2: 'Difference = 7−3 = 4, so rule is 4n + c. When n=1, the value is 3. Solve: 4(1) + c = 3.',
    L3: 'Difference = 4 → coefficient is 4. Rule: 4n + c. n=1 → 4+c=3 → c=−1. Rule: 4n−1. Verify: n=2 → 4(2)−1=7 ✓',
  },
  K14_Q4: {
    L1: 'To find the 10th term, substitute n = 10 into the rule 5n − 2.',
    L2: 'Replace n with 10: 5×10 − 2. Calculate 5×10 first.',
    L3: '5×10 = 50. Then 50 − 2 = 48. The 10th term is 48.',
  },

  // ──────────── K15 ────────────
  K15_Q1: {
    L1: 'The number outside the bracket must multiply EVERY term inside — not just the first one.',
    L2: 'Draw arrows: 3 → x and 3 → 4. Multiply each: 3×x = 3x and 3×4 = 12.',
    L3: '3(x+4): multiply 3 by x → 3x. Multiply 3 by 4 → 12. Join with +: 3x + 12.',
  },
  K15_Q2: {
    L1: 'Distribute 2 to both terms inside: 2 × 5 and 2 × (−y). Keep the subtraction sign.',
    L2: '2×5 = 10. What is 2 × (−y)? Remember: positive × negative = negative.',
    L3: '2×5 = 10. 2×(−y) = −2y. Result: 10 − 2y. The subtraction sign belongs to the y-term.',
  },
  K15_Q3: {
    L1: 'Two steps: (1) Expand 4(x+3) by distributing 4. (2) Collect the x-terms together.',
    L2: 'Step 1: 4(x+3) = 4x + 12. Now you have 4x + 12 + 2x. Which terms can you combine?',
    L3: '4(x+3) = 4x+12. Then 4x+12+2x: collect x-terms → 4x+2x=6x. Final answer: 6x+12.',
  },
  K15_Q4: {
    L1: 'Distribute 3 to BOTH terms inside: 3 × 2n and 3 × (−5). Watch the sign on the second term.',
    L2: '3 × 2n = 6n. What is 3 × (−5)? Positive × negative = ?',
    L3: '3×2n = 6n. 3×(−5) = −15. Result: 6n − 15. Positive times negative gives a negative result.',
  },

  // ──────────── K06 (Q5–Q12) ────────────
  K06_Q5: {
    L1: 'An equation has an equals sign. An expression does not.',
    L2: 'Check each option for the = symbol. The one without it is NOT an equation.',
    L3: '2x + 7 has no = sign — it is an expression. x = 5, 3+4=7, and y−2=0 all have = signs. Answer: 2x + 7.',
  },
  K06_Q6: {
    L1: 'An expression is a combination of terms with no equals sign.',
    L2: 'Look for the option that has no = sign — that is an expression, not an equation.',
    L3: '5x + 3 has no = sign → expression. The others (x=3, 2+3=5, y−1=0) all have = signs. Answer: 5x + 3.',
  },
  K06_Q7: {
    L1: 'One solution means exactly one value of x makes the equation true — not always true, not never true.',
    L2: 'Check: 2x+3=7 (can you find one x?), x+1=x+1 (always true?), 3=5 (ever true?).',
    L3: '2x+3=7 → x=2 (one solution). x+1=x+1 is always true (infinite). 3=5 is never true. 2x+3 is an expression. Answer: 2x + 3 = 7.',
  },
  K06_Q8: {
    L1: 'An identity is an equation that is true for ALL values of the variable, not just one.',
    L2: 'Test each option with two different values of x. Which one works for every x?',
    L3: 'x+2 = x+2: always true for any x (identity). x+2=x+3: never true. 2x=x: only x=0. x=5: only one value. Answer: x + 2 = x + 2.',
  },
  K06_Q9: {
    L1: 'Think carefully about what you can DO with an expression versus an equation.',
    L2: 'Expressions can be simplified. Equations can be solved. Can you "solve" an expression for a value?',
    L3: 'You cannot solve an expression — there is nothing to solve without an equals sign. The FALSE statement is: "Expressions can be solved". Answer: Expressions can be solved.',
  },
  K06_Q10: {
    L1: 'An identity is true for every possible value of x — it never fails.',
    L2: 'Substitute x = 0, x = 1, x = 100 into each option. Which one is always true?',
    L3: 'x+5 = x+5: always true for any x ✓. x+5=x+6: never true. 2x=x: only x=0. x=3: only one value. Answer: x + 5 = x + 5.',
  },
  K06_Q11: {
    L1: 'No solution means there is no value of x that can make the equation true.',
    L2: 'Cancel x from both sides of each option. If you get a false statement like 2 = 5, there is no solution.',
    L3: 'x+2=x+5: subtract x → 2=5 (false, impossible → no solution). x+2=x+2: 2=2 (always true). The others have one solution. Answer: x + 2 = x + 5.',
  },
  K06_Q12: {
    L1: 'Equations do not always have exactly one solution — think about identities and contradictions.',
    L2: 'Recall: x+5=x+5 (infinite solutions), x+2=x+5 (no solution), 2x=6 (one solution). All are possible.',
    L3: 'Equations can have one solution (2x=6), no solution (x+2=x+5), or infinitely many (x=x). The correct statement covers all three. Answer: Equations can have one, none, or infinite solutions.',
  },

  // ──────────── K07 (Q5–Q12) ────────────
  K07_Q5: {
    L1: 'The balance rule: the same operation on both sides keeps an equation equal.',
    L2: 'If both sides go down by 2, the gap between them does not change. Does the equation stay true?',
    L3: 'Subtracting 2 from both sides is the same legal move — equality is preserved. Answer: The equation remains balanced.',
  },
  K07_Q6: {
    L1: 'If you add different amounts to each side, the two sides are no longer equal.',
    L2: 'Imagine a scale: left side +7, right side +3. The pans are no longer level. What happens?',
    L3: 'Different operations break the equality. If left gets +7 and right gets +3, they drift apart. Answer: The equation becomes unbalanced.',
  },
  K07_Q7: {
    L1: 'Apply the subtraction to BOTH sides of x = 5.',
    L2: 'Left side: x − 3. Right side: 5 − 3. Write the new equation.',
    L3: 'x − 3 = 5 − 3 → x − 3 = 2. Answer: x − 3 = 2.',
  },
  K07_Q8: {
    L1: 'The golden rule of equations: whatever you do to one side, do the exact same thing to the other.',
    L2: 'Which option describes doing the identical operation on both sides?',
    L3: 'Only "doing the same operation on both sides" preserves equality. All other options change only one side or use different operations. Answer: Doing the same operation on both sides.',
  },
  K07_Q9: {
    L1: 'Dividing both sides by 2 cancels the coefficient on the left and divides the right.',
    L2: 'Left: 2x ÷ 2 = x. Right: 10 ÷ 2 = 5. Write the result.',
    L3: '2x/2 = 10/2 → x = 5. Both sides divided equally. Answer: x = 5.',
  },
  K07_Q10: {
    L1: 'An operation that is NOT applied to both sides will break equality.',
    L2: 'Three options apply the same change to both sides. One option changes only one side — which is it?',
    L3: 'Adding 3 to one side only is the only option that changes a single side, destroying equality. Answer: Adding 3 to one side only.',
  },
  K07_Q11: {
    L1: 'Dividing only one side of an equation makes the two sides unequal.',
    L2: 'If right side becomes 9/3=3 but left stays 3x, you have 3x = 3 only if x=1, not the original truth.',
    L3: 'Original: 3x = 9. Dividing only the right: 3x = 3. This is a DIFFERENT equation — the original is broken. Answer: Equation becomes incorrect.',
  },
  K07_Q12: {
    L1: 'Equality means the two sides represent the same value — any unequal change destroys that.',
    L2: 'Think: if left = right and you change only the left, can they still be equal?',
    L3: 'Both sides must be treated equally to keep the "=" relationship valid. The reason is: to maintain equality. Answer: To maintain equality.',
  },

  // ──────────── K08 (Q5–Q12) ────────────
  K08_Q5: {
    L1: 'Inverse of addition is subtraction. Subtract the constant from both sides.',
    L2: 'x has +5. Subtract 5 from both sides: x = 9 − 5.',
    L3: 'x + 5 − 5 = 9 − 5 → x = 4. Answer: x = 4.',
  },
  K08_Q6: {
    L1: 'Inverse of subtraction is addition. Add the constant to both sides.',
    L2: 'z has −6. Add 6 to both sides: z = 2 + 6.',
    L3: 'z − 6 + 6 = 2 + 6 → z = 8. Answer: z = 8.',
  },
  K08_Q7: {
    L1: 'To undo subtracting 9, add 9 to both sides.',
    L2: 'x − 9 = 3. Add 9 to both sides: x = 3 + 9.',
    L3: 'x − 9 + 9 = 3 + 9 → x = 12. Answer: x = 12.',
  },
  K08_Q8: {
    L1: 'The variable is on the right side. Add 5 to both sides to isolate x.',
    L2: 'Rewrite as x − 5 = 20. Add 5: x = 20 + 5.',
    L3: '20 = x − 5 → x − 5 + 5 = 20 + 5 → x = 25. Answer: x = 25.',
  },
  K08_Q9: {
    L1: 'Subtract 12 from both sides. The result may be negative.',
    L2: 'x + 12 = 5. Subtract 12: x = 5 − 12. Is 5 − 12 positive or negative?',
    L3: 'x = 5 − 12 = −7. Answer: x = −7.',
  },
  K08_Q10: {
    L1: 'Subtracting a negative is the same as adding. Simplify the left side first.',
    L2: 'x − (−4) = x + 4. Now solve: x + 4 = 10. Subtract 4.',
    L3: 'x − (−4) = x + 4 = 10 → x = 10 − 4 = 6. Answer: x = 6.',
  },
  K08_Q11: {
    L1: 'Add 3 to both sides to cancel the −3 and isolate x.',
    L2: '−3 + x = −10. Add 3 to both sides: x = −10 + 3.',
    L3: '−3 + x + 3 = −10 + 3 → x = −7. Answer: x = −7.',
  },
  K08_Q12: {
    L1: 'Adding zero to anything leaves it unchanged. What does that mean for x?',
    L2: 'x + 0 = x (adding zero does nothing). So x + 0 = 9 simplifies to x = 9.',
    L3: 'x + 0 = 9 → x = 9. Zero is the additive identity. Answer: x = 9.',
  },

  // ──────────── K09 (Q5–Q12) ────────────
  K09_Q5: {
    L1: 'Inverse of multiplication is division. Divide both sides by the coefficient.',
    L2: '6x = 42. Divide both sides by 6: x = 42 ÷ 6.',
    L3: '6x / 6 = 42 / 6 → x = 7. Answer: x = 7.',
  },
  K09_Q6: {
    L1: 'Inverse of division is multiplication. Multiply both sides by the divisor.',
    L2: 'x/5 = 3. Multiply both sides by 5: x = 3 × 5.',
    L3: '(x/5) × 5 = 3 × 5 → x = 15. Answer: x = 15.',
  },
  K09_Q7: {
    L1: 'Divide both sides by 8. Watch the sign — the right side is negative.',
    L2: '8y = −32. Divide both sides by 8: y = −32 ÷ 8. Positive ÷ positive with negative numerator.',
    L3: '8y / 8 = −32 / 8 → y = −4. Answer: y = −4.',
  },
  K09_Q8: {
    L1: 'Multiply both sides by 4 to undo the division. Keep the sign.',
    L2: 'x/4 = −6. Multiply both sides by 4: x = −6 × 4.',
    L3: '(x/4) × 4 = −6 × 4 → x = −24. Answer: x = −24.',
  },
  K09_Q9: {
    L1: 'Divide both sides by −3. Negative ÷ negative = positive.',
    L2: '−3x = −15. Divide both sides by −3: x = −15 ÷ −3.',
    L3: '−3x / −3 = −15 / −3 → x = 5 (negative ÷ negative = positive). Answer: x = 5.',
  },
  K09_Q10: {
    L1: 'Dividing by 0.5 is the same as multiplying by 2.',
    L2: '0.5x = 6. Divide by 0.5 (or multiply by 2): x = 6 ÷ 0.5.',
    L3: '0.5x / 0.5 = 6 / 0.5 → x = 12. (6 ÷ 0.5 = 6 × 2 = 12). Answer: x = 12.',
  },
  K09_Q11: {
    L1: 'Multiply both sides by −4. Two negatives multiply to a positive.',
    L2: 'x/−4 = −3. Multiply both sides by −4: x = −3 × −4.',
    L3: 'x = −3 × −4 = 12 (negative × negative = positive). Answer: x = 12.',
  },
  K09_Q12: {
    L1: 'Ask: what value times 10 gives exactly 0?',
    L2: '10x = 0. Divide both sides by 10: x = 0 ÷ 10.',
    L3: '10x / 10 = 0 / 10 → x = 0. Zero is the only number that makes 10x = 0. Answer: x = 0.',
  },

  // ──────────── K10 (Q5–Q12) ────────────
  K10_Q5: {
    L1: 'Divide both sides by the coefficient of x.',
    L2: '2x = 10. Divide both sides by 2: x = 10 ÷ 2.',
    L3: '2x / 2 = 10 / 2 → x = 5. Answer: x = 5.',
  },
  K10_Q6: {
    L1: 'Add 6 to both sides to cancel the −6.',
    L2: 'x − 6 = 4. Add 6: x = 4 + 6.',
    L3: 'x − 6 + 6 = 4 + 6 → x = 10. Answer: x = 10.',
  },
  K10_Q7: {
    L1: 'Divide both sides by 5. The right side is negative — keep the sign.',
    L2: '5x = −25. Divide by 5: x = −25 ÷ 5.',
    L3: '5x / 5 = −25 / 5 → x = −5. Answer: x = −5.',
  },
  K10_Q8: {
    L1: 'Multiply both sides by 2 to undo the division.',
    L2: 'x/2 = 7. Multiply both sides by 2: x = 7 × 2.',
    L3: '(x/2) × 2 = 7 × 2 → x = 14. Answer: x = 14.',
  },
  K10_Q9: {
    L1: 'Divide both sides by −2. Positive ÷ negative = negative.',
    L2: '−2x = 8. Divide both sides by −2: x = 8 ÷ −2.',
    L3: '−2x / −2 = 8 / −2 → x = −4. Answer: x = −4.',
  },
  K10_Q10: {
    L1: 'Ask: what number times 3 equals 0?',
    L2: '3x = 0. Divide both sides by 3: x = 0 ÷ 3.',
    L3: '3x / 3 = 0 / 3 → x = 0. Only zero satisfies this. Answer: x = 0.',
  },
  K10_Q11: {
    L1: 'Dividing by 0.5 is the same as multiplying by 2.',
    L2: 'x/0.5 = 10. Multiply both sides by 0.5: x = 10 × 0.5.',
    L3: 'x = 10 × 0.5 = 5. Answer: x = 5.',
  },
  K10_Q12: {
    L1: 'Two steps: first multiply by 2, then multiply by −1 to fix the sign.',
    L2: '−x/2 = 6. Multiply both sides by 2: −x = 12. Then multiply by −1: x = ?',
    L3: '−x/2 × 2 = 6 × 2 → −x = 12 → x = −12. Answer: x = −12.',
  },

  // ──────────── K11 (Q5–Q12) ────────────
  K11_Q5: {
    L1: 'Two steps: undo the constant first (subtract/add), then undo the coefficient (divide).',
    L2: '3x + 2 = 11. Step 1: subtract 2 → 3x = 9. Step 2: divide by 3.',
    L3: '3x + 2 − 2 = 11 − 2 → 3x = 9 → x = 3. Answer: x = 3.',
  },
  K11_Q6: {
    L1: 'Add first to undo the constant, then divide to undo the coefficient.',
    L2: '4x − 4 = 12. Add 4: 4x = 16. Then divide by 4.',
    L3: '4x − 4 + 4 = 12 + 4 → 4x = 16 → x = 4. Answer: x = 4.',
  },
  K11_Q7: {
    L1: 'Subtract the constant first. The answer may be negative.',
    L2: '2x + 5 = 1. Subtract 5: 2x = 1 − 5 = −4. Then divide by 2.',
    L3: '2x = 1 − 5 = −4 → x = −4 / 2 = −2. Answer: x = −2.',
  },
  K11_Q8: {
    L1: 'Add 2 to both sides first, then divide by the coefficient.',
    L2: '6x − 2 = 10. Add 2: 6x = 12. Then divide by 6.',
    L3: '6x − 2 + 2 = 10 + 2 → 6x = 12 → x = 2. Answer: x = 2.',
  },
  K11_Q9: {
    L1: 'Subtract the constant first — notice both sides of the equation after you do.',
    L2: '7x + 3 = 3. Subtract 3: 7x = 0. What number times 7 equals 0?',
    L3: '7x + 3 − 3 = 3 − 3 → 7x = 0 → x = 0. Answer: x = 0.',
  },
  K11_Q10: {
    L1: 'Subtract the constant from both sides first, then divide by the coefficient (which is negative).',
    L2: '4 − 3x = 1. Subtract 4: −3x = −3. Divide by −3.',
    L3: '4 − 3x − 4 = 1 − 4 → −3x = −3 → x = 1. Answer: x = 1.',
  },
  K11_Q11: {
    L1: 'Add 6 to both sides first, then divide.',
    L2: '2x − 6 = −2. Add 6: 2x = 4. Then divide by 2.',
    L3: '2x − 6 + 6 = −2 + 6 → 2x = 4 → x = 2. Answer: x = 2.',
  },
  K11_Q12: {
    L1: 'Subtract 6 first, then divide. The result will be negative.',
    L2: '3x + 6 = 0. Subtract 6: 3x = −6. Then divide by 3.',
    L3: '3x + 6 − 6 = 0 − 6 → 3x = −6 → x = −2. Answer: x = −2.',
  },

  // ──────────── K12 (Q5–Q12) ────────────
  K12_Q5: {
    L1: '"More than" means addition. Set up the equation with the unknown first.',
    L2: 'Let n = the number. "Five more than n" = n + 5. Set it equal to 12.',
    L3: 'n + 5 = 12. Answer: n + 5 = 12.',
  },
  K12_Q6: {
    L1: 'Set up the equation, then solve by adding to both sides.',
    L2: '"Decreased by 3" → n − 3 = 9. Add 3 to both sides to find n.',
    L3: 'n − 3 = 9 → n = 9 + 3 = 12. Answer: 12.',
  },
  K12_Q7: {
    L1: 'Translate into an equation first, then solve in two steps.',
    L2: '"Twice a number minus 4 = 10" → 2n − 4 = 10. Add 4 first, then divide by 2.',
    L3: '2n − 4 = 10 → 2n = 14 → n = 7. Answer: 7.',
  },
  K12_Q8: {
    L1: '"Half a number" means divide by 2. Set up the equation, then undo the operations in reverse.',
    L2: 'n/2 + 6 = 10. Subtract 6 first: n/2 = 4. Then multiply by 2.',
    L3: 'n/2 + 6 = 10 → n/2 = 4 → n = 8. Answer: 8.',
  },
  K12_Q9: {
    L1: 'Translate the phrase into an equation, then solve in two steps.',
    L2: '"Three more than twice a number is 13" → 2n + 3 = 13. Subtract 3 first, then divide.',
    L3: '2n + 3 = 13 → 2n = 10 → n = 5. Answer: 5.',
  },
  K12_Q10: {
    L1: 'Identify the fixed fee and the per-item cost. Set up a two-step equation.',
    L2: 'Let n = number of items. 20 + 5n = 70. Subtract 20 first, then divide by 5.',
    L3: '20 + 5n = 70 → 5n = 50 → n = 10. Answer: 10.',
  },
  K12_Q11: {
    L1: 'Translate into an equation and solve in two steps.',
    L2: '"Multiplied by 4, then reduced by 6, equals 10" → 4n − 6 = 10. Add 6 first, then divide.',
    L3: '4n − 6 = 10 → 4n = 16 → n = 4. Answer: 4.',
  },
  K12_Q12: {
    L1: 'Translate, then undo the operations in reverse order.',
    L2: '"Divided by 3 plus 2 equals 6" → n/3 + 2 = 6. Subtract 2 first, then multiply by 3.',
    L3: 'n/3 + 2 = 6 → n/3 = 4 → n = 12. Answer: 12.',
  },

  // ──────────── K13 (Q5–Q15) ────────────
  K13_Q5: {
    L1: '"Increased by" always means add. The unknown comes first.',
    L2: 'Let n = the number. "Increased by 7" = add 7 to n.',
    L3: '"A number increased by 7" = n + 7. Answer: n + 7.',
  },
  K13_Q6: {
    L1: '"Divided by" means use division. The number being divided is n.',
    L2: 'n divided by 3 is written as n ÷ 3. Do not confuse with 3n (multiplication).',
    L3: '"A number divided by 3" = n ÷ 3. Answer: n ÷ 3.',
  },
  K13_Q7: {
    L1: '"Times" or "multiplied by" means multiplication. Write the number before the variable.',
    L2: '"Four times a number n" = 4 × n = 4n.',
    L3: '"Four times a number" = 4n. Answer: 4n.',
  },
  K13_Q8: {
    L1: '"Less than" reverses order. "5 less than X" means X − 5, not 5 − X.',
    L2: '"Five less than twice a number": first write twice the number (2n), then subtract 5.',
    L3: '"Twice a number" = 2n. "Five less than 2n" = 2n − 5. Answer: 2n − 5.',
  },
  K13_Q9: {
    L1: 'Identify the product first, then add "three more" to it.',
    L2: '"Product of 6 and n" = 6n. "Three more than" = +3. Combine them.',
    L3: '"Product of 6 and n" = 6n. "Three more" = 6n + 3. Answer: 6n + 3.',
  },
  K13_Q10: {
    L1: '"All multiplied by 5" means the entire sum needs brackets before multiplying.',
    L2: '"The sum of n and 4" = (n+4). "All multiplied by 5" = 5 × (n+4).',
    L3: '5(n + 4). Without brackets, 5n+4 would mean only n is multiplied by 5. Answer: 5(n + 4).',
  },
  K13_Q11: {
    L1: '"Quotient" means division. Do the division first, then add 6.',
    L2: '"Quotient of n and 4" = n ÷ 4. "Increased by 6" = + 6 after the division.',
    L3: 'n ÷ 4 + 6. Do not put 6 inside the division. Answer: n ÷ 4 + 6.',
  },
  K13_Q12: {
    L1: '"The difference" means subtract. Use brackets so the 3 multiplies the whole difference.',
    L2: '"Difference of n and 4" = (n−4). "Three times" that difference = 3 × (n−4).',
    L3: '3(n − 4). Without brackets, 3n−4 means only n is multiplied by 3. Answer: 3(n − 4).',
  },
  K13_Q13: {
    L1: '"Twice the sum" requires brackets. Then subtract 3 outside the bracket.',
    L2: '"Sum of n and 7" = (n+7). "Twice" that = 2(n+7). "Decreased by 3" = −3 outside.',
    L3: '2(n + 7) − 3. The −3 is outside the bracket. Answer: 2(n + 7) − 3.',
  },
  K13_Q14: {
    L1: 'Perimeter = 2 × width + 2 × length. Write expressions for both sides first.',
    L2: 'Width = n. Length = n + 5. Perimeter = 2(n) + 2(n+5). Expand and simplify.',
    L3: '2n + 2(n+5) = 2n + 2n + 10 = 4n + 10. Answer: 4n + 10.',
  },
  K13_Q15: {
    L1: '"Three times the sum" needs brackets. Then add 8 outside.',
    L2: '"Sum of n and 2" = (n+2). "Three times" = 3(n+2). "Eight more than" = +8 outside.',
    L3: '3(n + 2) + 8. The +8 sits outside the brackets. Answer: 3(n + 2) + 8.',
  },

  // ──────────── K14 (Q5–Q15) ────────────
  K14_Q5: {
    L1: 'Find the common difference between consecutive terms, then add it to the last term.',
    L2: '4 − 2 = 2. Each term increases by 2. What is 8 + 2?',
    L3: 'Common difference = 2. Next term = 8 + 2 = 10. Answer: 10.',
  },
  K14_Q6: {
    L1: 'Substitute n = 5 into the rule. Multiply — do not add.',
    L2: 'Rule is 2n. Replace n with 5: 2 × 5.',
    L3: '2n with n=5: 2 × 5 = 10. Answer: 10.',
  },
  K14_Q7: {
    L1: 'The sequence is decreasing. Find by how much it drops each step.',
    L2: '10 − 7 = 3. Each term decreases by 3. What is 1 − 3?',
    L3: 'Common difference = −3. Next term = 1 − 3 = −2. Answer: −2.',
  },
  K14_Q8: {
    L1: 'Substitute n = 6. Multiply first, then add the constant.',
    L2: 'Rule is 2n + 3. Replace n with 6: 2 × 6 + 3. Multiply before adding.',
    L3: '2(6) + 3 = 12 + 3 = 15. Answer: 15.',
  },
  K14_Q9: {
    L1: 'Find the common difference (coefficient of n). Then use n = 1 to find the constant.',
    L2: 'Difference = 5−2 = 3. Rule: 3n + c. When n=1, value=2: 3(1) + c = 2 → c = ?',
    L3: '3(1) + c = 2 → c = −1. Rule: 3n − 1. Check: n=2 → 3(2)−1 = 5 ✓. Answer: 3n − 1.',
  },
  K14_Q10: {
    L1: 'Substitute n = 8 into the rule. Multiply first, then add.',
    L2: 'Rule is 4n + 1. Replace n with 8: 4 × 8 + 1. Multiply before adding.',
    L3: '4(8) + 1 = 32 + 1 = 33. Answer: 33.',
  },
  K14_Q11: {
    L1: 'Find the common difference from the table, then use one entry to find the constant.',
    L2: 'Difference = 9 − 6 = 3. Rule: 3n + c. When n=1, value=6: 3(1) + c = 6 → c = ?',
    L3: '3(1) + c = 6 → c = 3. Rule: 3n + 3. Check: n=2 → 6+3=9 ✓. Answer: 3n + 3.',
  },
  K14_Q12: {
    L1: 'Find the common difference, then use n = 1 to determine the constant.',
    L2: 'Difference = 11 − 5 = 6. Rule: 6n + c. When n=1, value=5: 6(1) + c = 5 → c = ?',
    L3: '6(1) + c = 5 → c = −1. Rule: 6n − 1. Check: n=2 → 12−1=11 ✓. Answer: 6n − 1.',
  },
  K14_Q13: {
    L1: 'From term 1 to term 12 there are 11 gaps, not 12.',
    L2: 'Start at 3. Add 4 exactly 11 times (not 12): 3 + (11 × 4).',
    L3: '3 + 11 × 4 = 3 + 44 = 47. Answer: 47.',
  },
  K14_Q14: {
    L1: 'Set the rule equal to 19 and solve for n.',
    L2: '2n + 1 = 19. Subtract 1: 2n = 18. Then divide by 2.',
    L3: '2n + 1 = 19 → 2n = 18 → n = 9. Answer: 9.',
  },
  K14_Q15: {
    L1: 'Set the two rules equal to each other and solve for n.',
    L2: '3n + 2 = 5n − 4. Collect n-terms on one side: subtract 3n. Collect numbers on the other: add 4.',
    L3: '3n + 2 = 5n − 4 → 6 = 2n → n = 3. Check: A=11, B=11 ✓. Answer: 3.',
  },

  // ──────────── K15 (Q5–Q15) ────────────
  K15_Q5: {
    L1: 'Multiply the number outside by EVERY term inside the brackets.',
    L2: '5(a + 2): 5 × a = 5a. 5 × 2 = 10. Join with +.',
    L3: '5 × a = 5a. 5 × 2 = 10. Result: 5a + 10. Answer: 5a + 10.',
  },
  K15_Q6: {
    L1: 'Distribute to both terms. Positive times negative gives negative.',
    L2: '4(3 − m): 4 × 3 = 12. 4 × (−m) = −4m. Join them.',
    L3: '4 × 3 = 12. 4 × (−m) = −4m. Result: 12 − 4m. Answer: 12 − 4m.',
  },
  K15_Q7: {
    L1: 'Multiply the outside number by each term inside — do not just add.',
    L2: '2(6 + n): 2 × 6 = 12. 2 × n = 2n. Join with +.',
    L3: '2 × 6 = 12. 2 × n = 2n. Result: 12 + 2n. Answer: 12 + 2n.',
  },
  K15_Q8: {
    L1: 'Expand the brackets first, then collect like terms.',
    L2: '3(x + 2) = 3x + 6. Now add 5x: 3x + 6 + 5x. Combine x-terms.',
    L3: '3(x+2) = 3x + 6. Then 3x + 6 + 5x = 8x + 6. Answer: 8x + 6.',
  },
  K15_Q9: {
    L1: 'Expand the brackets first, then add the remaining term and collect like terms.',
    L2: '2(3n − 4) = 6n − 8. Now add n: 6n − 8 + n. Combine n-terms.',
    L3: '2(3n−4) = 6n − 8. Then 6n − 8 + n = 7n − 8. Answer: 7n − 8.',
  },
  K15_Q10: {
    L1: 'Multiply the outside number by each term inside.',
    L2: '6(2x + 3): 6 × 2x = 12x. 6 × 3 = 18. Join with +.',
    L3: '6 × 2x = 12x. 6 × 3 = 18. Result: 12x + 18. Answer: 12x + 18.',
  },
  K15_Q11: {
    L1: 'Expand first, then subtract the extra term and collect like terms.',
    L2: '5(n + 1) = 5n + 5. Now subtract 2n: 5n + 5 − 2n. Combine n-terms.',
    L3: '5(n+1) = 5n + 5. Then 5n + 5 − 2n = 3n + 5. Answer: 3n + 5.',
  },
  K15_Q12: {
    L1: 'Expand both brackets separately, then subtract the second result from the first.',
    L2: '3(2x+4) = 6x+12. 2(x+1) = 2x+2. Now: 6x+12 − (2x+2). Collect terms.',
    L3: '6x+12 − 2x − 2 = 4x + 10. Answer: 4x + 10.',
  },
  K15_Q13: {
    L1: 'Expand both brackets separately, then add the results together.',
    L2: '4(n−3) = 4n−12. 2(n+5) = 2n+10. Now add: (4n−12) + (2n+10).',
    L3: '4n − 12 + 2n + 10 = 6n − 2. Answer: 6n − 2.',
  },
  K15_Q14: {
    L1: 'Expand both brackets, then subtract the second expansion from the first.',
    L2: '5(2x−1) = 10x−5. 3(x+2) = 3x+6. Now: 10x−5 − (3x+6). Collect terms.',
    L3: '10x − 5 − 3x − 6 = 7x − 11. Answer: 7x − 11.',
  },
  K15_Q15: {
    L1: 'A negative sign outside brackets flips every sign inside. Expand carefully.',
    L2: '2(3n+4) = 6n+8. −(n−2) = −n+2 (signs flip). Now add both results.',
    L3: '6n + 8 + (−n + 2) = 5n + 10. Answer: 5n + 10.',
  },
};

export default HINT_SCAFFOLDS;
