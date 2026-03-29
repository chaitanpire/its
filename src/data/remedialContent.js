/**
 * remedialContent.js
 * Micro-lessons triggered after 3 consecutive incorrect attempts.
 * Each lesson has: title, story, core concept, visual analogy, and a retry task.
 */

export const REMEDIAL_CONTENT = {
  K01: {
    id: 'R_K01',
    title: 'Letters as Unknowns',
    targetError: 'Identifying variables vs constants',
    story: `Imagine you have a bag and you don't know how many marbles are inside.
Instead of writing "unknown number of marbles" every time, we use a letter like x or n.
That letter is our VARIABLE — it's a placeholder for a number we haven't discovered yet.
The bag might have 5 marbles, or 10, or 100 — x holds the place until we find out.
Numbers that DON'T change (like your birthday, or the number 7) are CONSTANTS.`,
    concept: `Variable = a LETTER representing an unknown number.
Constant = a FIXED number that never changes.
In 3x + 5: x is the variable (unknown), 3 and 5 are constants (fixed numbers).`,
    analogy: `Think of a name tag at a party. The tag says "Guest #?" — that's the variable.
But the table number "Table 5" never changes — that's the constant.`,
    retryTask: {
      stem: 'Identify the variable in: 12 + p',
      correct: 'p',
      options: ['p', '12', '12 + p', 'No variable'],
      hint: 'Look for the letter in the expression.',
    },
  },

  K02: {
    id: 'R_K02',
    title: 'The Invisible 1',
    targetError: 'Coefficient of a standalone variable',
    story: `Meet the sneakiest number in algebra: the INVISIBLE ONE.
When you write just "x", you're really writing "1 × x" = 1x.
The 1 is always there, silently multiplying the variable. We just don't bother writing it.
Same with −z: that's (−1) × z = −1z. The negative sign is actually a coefficient of −1!
This matters because when you combine like terms, you need to count this hidden 1.`,
    concept: `x = 1x (coefficient is 1)
−y = −1y (coefficient is −1)
a = 1a (coefficient is 1)
Standalone variables ALWAYS have a coefficient of 1 (positive or negative).`,
    analogy: `If you have "one apple", you can say "apple" or "1 apple" — they mean the same thing.
In algebra, x = 1x. The 1 is implied, like "one" before any single item.`,
    retryTask: {
      stem: 'What is the coefficient of y in: 3x + y − 4?',
      correct: '1',
      options: ['1', '0', '3', '−4'],
      hint: 'y appears alone with no number in front of it.',
    },
  },

  K03: {
    id: 'R_K03',
    title: 'Order of Operations Matters!',
    targetError: 'PEMDAS violation during evaluation',
    story: `Imagine building a sandwich. You MUST put bread first, then filling, then bread again.
You can't just add things in any order you like — there's a rule.
Math has the same rule: PEMDAS (Parentheses, Exponents, Multiplication, Division, Addition, Subtraction).
If a = 3 and we evaluate 2a + 4:
WRONG: 2 + 4 = 6, then 6 × 3 = 18 ← adding before multiplying!
RIGHT: 2 × 3 = 6, then 6 + 4 = 10 ← multiply FIRST ✓`,
    concept: `PEMDAS Order:
1. Parentheses: ( )
2. Exponents: x²
3. Multiply / Divide (left to right)
4. Add / Subtract (left to right)
NEVER add before multiplying unless there are parentheses!`,
    analogy: `Getting dressed: put on socks THEN shoes (can't reverse this!).
PEMDAS is the "getting dressed" rule for math — strict order, always.`,
    retryTask: {
      stem: 'Evaluate 2x + 4 when x = 5',
      correct: '14',
      options: ['14', '45', '9', '28'],
      hint: 'Multiply 2 × 5 first, then add 4.',
    },
  },

  K04: {
    id: 'R_K04',
    title: 'The Matching Game',
    targetError: 'Identifying like terms incorrectly',
    story: `You're sorting fruit at a market. You CAN'T count "3 apples + 2 bananas = 5 something",
because apples and bananas are different things. They don't combine.
BUT "3 apples + 4 apples = 7 apples" — same type, so they combine!
In algebra, terms are "the same type" only if they have:
1. The SAME variable (letter)
2. The SAME exponent (little number up top)
3x and 5x → same letter (x), same power (1) → LIKE TERMS ✓
3x and 3x² → same letter (x), different power (1 vs 2) → NOT like ✗
3x and 3y → different letter → NOT like ✗`,
    concept: `Like terms checklist:
✓ Same variable(s)
✓ Same exponent on each variable
✗ Coefficients don't matter (can be different)`,
    analogy: `Matching socks: same colour AND same size = a match.
One thing wrong (different colour or different size) = no match.
Like terms are the matching socks of algebra.`,
    retryTask: {
      stem: 'Which term is like 3y²?',
      correct: '−y²',
      options: ['−y²', '3y', '2x²', 'y³'],
      hint: 'You need the SAME variable (y) AND the SAME exponent (2).',
    },
  },

  K05: {
    id: 'R_K05',
    title: 'Apples and Oranges',
    targetError: 'Combining unlike terms',
    story: `You have a fruit basket with 3 apples, 2 oranges, and 5 more apples.
You CAN combine the apples: 3 + 5 = 8 apples.
You CANNOT combine apples and oranges: "3 apples + 2 oranges" stays as is.
In algebra: 3x + 2y + 5x = (3x + 5x) + 2y = 8x + 2y.
We combined the x "apples" but left the y "oranges" alone.
NEVER write 3x + 2y = 5xy. That's like saying "3 apples + 2 oranges = 5 appleoranges"!`,
    concept: `To simplify:
1. Identify like-term groups
2. Add/subtract ONLY the coefficients within each group
3. Keep the variable part UNCHANGED
4. Unlike terms stay separated`,
    analogy: `A librarian sorts books by subject. She can count "math books" and "history books" separately,
but she can't combine them into a single category.`,
    retryTask: {
      stem: 'Simplify: 5x + 2x + 3y',
      correct: '7x + 3y',
      options: ['7x + 3y', '10xy', '7x + 3y + 0', '10x + 3y'],
      hint: 'Combine only the x-terms. Leave the y-term as is.',
    },
  },

  K06: {
    id: 'R_K06',
    title: 'The Equals Sign Changes Everything',
    targetError: 'Confusing expressions and equations',
    story: `In English:
- "Three birds" → This is a PHRASE. It doesn't say anything true or false.
- "Three birds are on the fence" → This is a SENTENCE. It makes a claim (true or false).
In algebra:
- "3x + 2" → This is an EXPRESSION (a mathematical phrase). Just a calculation, no claim.
- "3x + 2 = 11" → This is an EQUATION (a mathematical sentence). It claims 3x+2 and 11 are equal.
The equals sign (=) is the verb of math. It says "these two things are equal."
Without it, you just have a phrase, not a statement.`,
    concept: `Expression: numbers and variables combined with operations. NO equals sign.
Equation: two expressions connected by an equals sign (=).
Test: Does it have "="? YES → equation. NO → expression.`,
    analogy: `A question mark makes a question. An exclamation mark makes an exclamation.
In math, the equals sign makes an equation. It's the punctuation that matters.`,
    retryTask: {
      stem: 'Which one is an EQUATION?',
      correct: '3x = 9',
      options: ['3x = 9', '3x', '3x + 9', 'x²'],
      hint: 'Look for the = symbol.',
    },
  },

  K07: {
    id: 'R_K07',
    title: 'The See-Saw Rule',
    targetError: 'Violating the balance principle',
    story: `Picture a perfect see-saw. Leo (40 kg) is on the left. Maya (40 kg) is on the right.
It's perfectly balanced (equal on both sides).
Now Leo gains 5 kg. The see-saw tips to the left!
To rebalance, Maya ALSO gains 5 kg. Equal change on both sides → balance restored.
Your equation is the see-saw. The = sign is the pivot.
Anything you do to the left side, you MUST do the exact same thing to the right.
Tip one side → BROKEN equation. Equal changes → balanced (still true).`,
    concept: `The Balance Principle:
A = B
A + c = B + c (add same thing to both)
A − c = B − c (subtract same thing from both)
A × c = B × c (multiply both by same thing)
A / c = B / c (divide both by same thing, c ≠ 0)`,
    analogy: `Fair sharing: if you give one child a cookie, you give the same to the other child.
Equations must be treated "fairly" — both sides get the same treatment.`,
    retryTask: {
      stem: 'If x = 10, what is x − 2?',
      correct: '8',
      options: ['8', '10', '12', '−2'],
      hint: 'Subtract 2 from the value: 10 − 2 = ?',
    },
  },

  K08: {
    id: 'R_K08',
    title: 'Why Signs Matter',
    targetError: 'Sign error in inverse operations',
    story: `Imagine a number x sitting in a room, and someone ADDS 6 to it. The result is 14.
To find x, you need to REMOVE the 6 — you SUBTRACT it.
Adding and Subtracting are opposites. They cancel each other out:
x + 6 − 6 = x (the +6 and −6 destroy each other, leaving just x)
RULE: If the equation adds a number to x → you SUBTRACT that number from both sides.
If the equation subtracts a number from x → you ADD that number to both sides.
Always do the OPPOSITE of what's already there.`,
    concept: `+n on variable → subtract n from both sides
−n on variable → add n to both sides
The inverse creates a zero: +6 + (−6) = 0, so it disappears`,
    analogy: `Temperature: if it went up 6°C and you want to get back to where you started,
you cool it down by 6°C. You UNDO the change with its opposite.`,
    retryTask: {
      stem: 'Solve for x: x + 6 = 14',
      correct: 'x = 8',
      options: ['x = 8', 'x = 20', 'x = 6', 'x = 14'],
      hint: 'Subtract 6 from both sides.',
    },
  },

  K09: {
    id: 'R_K09',
    title: 'Undoing Multiplication',
    targetError: 'Using wrong inverse for multiplication',
    story: `You have 3 equal mystery boxes. Together they weigh 15 kg. How heavy is each box?
You DIVIDE the total by 3: 15 ÷ 3 = 5 kg per box.
In algebra: 3x = 15. The 3 is multiplying x. To UNDO multiplication, we DIVIDE.
Key insight: 3x ÷ 3 = (3/3) × x = 1 × x = x. The 3 divides itself away!
This is called "cancellation". When you divide a coefficient by itself, you get 1,
and 1×x is just x — the variable stands alone.`,
    concept: `ax = b → divide both sides by a → x = b/a
(ax)/a = x because a/a = 1, and 1·x = x
The coefficient cancels with the division.`,
    analogy: `If you multiply a number by 3, then divide by 3, you're back where you started.
×3 and ÷3 are perfect inverses — they completely undo each other.`,
    retryTask: {
      stem: 'Solve for y: 5y = 30',
      correct: 'y = 6',
      options: ['y = 6', 'y = 35', 'y = 25', 'y = 150'],
      hint: 'Divide both sides by 5.',
    },
  },

  K10: {
    id: 'R_K10',
    title: 'Fractions are Division',
    targetError: 'Mishandling division equations',
    story: `When you see p/4, this means "p divided by 4".
The fraction bar IS a division sign.
To UNDO division, you MULTIPLY. They're opposites, just like + and −.
p/4 means p has been divided by 4. To get p back, multiply by 4:
(p/4) × 4 = p × (4/4) = p × 1 = p
The 4s cancel each other!
Equation: p/4 = 2 → multiply both sides by 4 → p = 2 × 4 = 8`,
    concept: `x/a = b → multiply both sides by a → x = b × a
The fraction (division) is undone by multiplication.`,
    analogy: `Cutting a pizza into 4 slices (÷4) and then putting 4 slices back together (×4)
gives you the whole pizza again. They perfectly undo each other.`,
    retryTask: {
      stem: 'Solve for p: p/2 = 10',
      correct: 'p = 20',
      options: ['p = 20', 'p = 5', 'p = 12', 'p = 8'],
      hint: 'Multiply both sides by 2 to undo the division.',
    },
  },

  K11: {
    id: 'R_K11',
    title: 'SADMEP — Solving in Reverse',
    targetError: 'Wrong order when solving two-step equations',
    story: `When you put on shoes, you put SOCKS on first, then SHOES.
To TAKE them off: SHOES first, then SOCKS. You reverse the order.
PEMDAS builds expressions: multiply first, then add.
To UNDO (solve), you reverse — SADMEP:
S = Subtract/Add first
A = ...
D = Divide/Multiply second
For 2x + 3 = 11:
The +3 was added LAST (like the shoe). So we REMOVE it FIRST: −3 both sides → 2x = 8.
Then remove ×2 (the sock): ÷2 → x = 4.`,
    concept: `For ax + b = c:
Step 1: Subtract b from both sides → ax = c − b
Step 2: Divide by a → x = (c − b)/a
Always undo addition/subtraction BEFORE multiplication/division.`,
    analogy: `To unwrap a present: remove the ribbon (outer layer, added last) FIRST,
then open the box (inner layer, added first). Reverse the wrapping order.`,
    retryTask: {
      stem: 'Solve for m: 3m + 2 = 11',
      correct: 'm = 3',
      options: ['m = 3', 'm = 13/3', 'm = 4.3', 'm = 5'],
      hint: 'First subtract 2 from both sides, then divide by 3.',
    },
  },

  K12: {
    id: 'R_K12',
    title: 'Translation Traps',
    targetError: '"Less than" and other reversal errors',
    story: `The biggest trap in word problems is "less than".
"5 less than x" does NOT mean 5 − x. It means x − 5.
Think of it this way: "5 less than my score" means my score (x) with 5 subtracted from it.
My score comes FIRST: x − 5.
Other traps:
- "Exceeded by 3" → add 3 → x + 3
- "3 more than x" → x + 3
- "x more than 7" → 7 + x (here x is what's added to the fixed amount!)
Always ask: what is the starting point? Then apply the operation to it.`,
    concept: `"[n] less than [x]" → x − n (n is subtracted FROM x)
"[n] more than [x]" → x + n
"Twice [x]" → 2x
"[x] divided equally among [n]" → x/n`,
    analogy: `Detective work: re-read carefully, act out the scenario in your head.
"4 fewer apples than my friend" — your friend's apples MINUS 4. You come second.`,
    retryTask: {
      stem: 'Translate and solve: "5 less than x is 20"',
      correct: 'x = 25',
      options: ['x = 25', 'x = 15', 'x = 20', 'x = −15'],
      hint: '"5 less than x" = x − 5. Set equal to 20 and solve.',
    },
  },

  K13: {
    id: 'R_K13',
    title: 'Translating Words into Algebra',
    targetError: '"Less than" reversal and bracket omission errors',
    story: `Meet Kavya and her piggy bank. Every week she saves ₹3 per task she completes, plus a fixed ₹10 her mum gives her.
If she does t tasks, she saves 3t + 10 rupees that week.
The phrase "3 rupees per task" → 3t (multiply).
The phrase "plus ₹10" → +10 (add).
Now a trickier one: "₹5 less than Kavya's savings" — this means Kavya's amount MINUS 5.
It's (3t + 10) − 5, NOT 5 − (3t + 10). Whatever is "less than" comes FIRST.`,
    concept: `Key operation words:
"increased by / more than / sum" → + (add)
"decreased by / less than / difference" → − (subtract)
"times / product of / multiplied by" → × (multiply)
"divided by / per / for each" → ÷ (divide)
TRAP: "4 less than n" = n − 4, not 4 − n. The thing being reduced comes FIRST.`,
    analogy: `Algebra is just a translation language. "Increased by 7" is like "plus sept" in French — same idea, different notation.
Build your phrase-by-phrase dictionary and you'll translate anything.`,
    retryTask: {
      stem: 'Which expression means "5 less than twice a number n"?',
      correct: '2n − 5',
      options: ['2n − 5', '5 − 2n', '2n + 5', '2(n − 5)'],
      hint: '"Twice a number" = 2n. "5 less than 2n" means 2n − 5.',
    },
  },

  K14: {
    id: 'R_K14',
    title: 'Reading Tables and Spotting the Rule',
    targetError: 'Wrong constant in nth-term rule',
    story: `Priya collects stamps. After week 1 she has 5, after week 2 she has 9, after week 3 she has 13.
Each week she adds 4 more stamps. The "jump" of 4 is our coefficient: rule involves 4n.
To find the constant, ask: "When n=1, value = 5. So 4(1) + c = 5 → c = 1."
Rule: 4n + 1. Check week 2: 4(2)+1 = 9 ✓. Week 3: 4(3)+1 = 13 ✓.
Always verify with two terms before trusting your rule!`,
    concept: `To find the nth-term rule:
1. Find the common difference → this is the coefficient of n.
2. Substitute n=1 and the first term to solve for the constant c.
3. Rule = (difference)×n + c
4. Verify with n=2 to confirm.`,
    analogy: `Finding the rule is like cracking a safe combination.
The common difference gives you the first digit (coefficient).
Checking n=1 gives you the second digit (constant).
Both digits together open the safe — the complete rule!`,
    retryTask: {
      stem: 'Find the rule for the pattern: 4, 7, 10, 13, ... (n = 1, 2, 3, 4)',
      correct: '3n + 1',
      options: ['3n + 1', '3n + 4', '4n + 3', '3n'],
      hint: 'Difference = 3, so rule is 3n + c. When n=1, value = 4. Solve for c.',
    },
  },

  K15: {
    id: 'R_K15',
    title: 'The Postman Rule: Deliver to Every Door',
    targetError: 'Only distributing to the first term',
    story: `Imagine a postman with a big bag carrying the number 4.
He knocks on the door of every resident INSIDE the bracket.
In 4(x + 3): Resident 1 is x → postman delivers 4, so x becomes 4x.
Resident 2 is 3 → postman delivers 4, so 3 becomes 12.
Result: 4x + 12.
The postman NEVER skips a door — every term inside must be multiplied.
If the postman carries a negative bag (−2), everyone inside gets a negative delivery too!`,
    concept: `Distributive Property: a(b + c) = ab + ac
• Multiply the term OUTSIDE by EVERY term inside.
• Distribute: 5(x + 2) = 5x + 10
• Negative: −3(x + 4) = −3x − 12
• Mixed: 2(3n − 5) = 6n − 10
Never leave any term un-multiplied!`,
    analogy: `The number outside is a generous host who gives the same gift to every guest inside the bracket.
3 guests, 1 host, same gift each: 3(x + 5) → each gets ×3: 3x + 15.`,
    retryTask: {
      stem: 'Expand: 5(x + 3)',
      correct: '5x + 15',
      options: ['5x + 15', '5x + 3', '8x', '5x + 8'],
      hint: 'Multiply 5 by x, AND multiply 5 by 3. Both terms get multiplied.',
    },
  },
};

export default REMEDIAL_CONTENT;
