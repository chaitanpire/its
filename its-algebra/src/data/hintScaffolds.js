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
};

export default HINT_SCAFFOLDS;
