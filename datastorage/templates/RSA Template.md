## RSA Encryption CTF Template for Beginners

### 1. Understanding RSA Encryption
1. **Basic Concepts**
    - **RSA Keys**: Consist of a public key `(n, e)` and a private key `(n, d)`.
        - `n`: The modulus, a product of two prime numbers `p` and `q`. Its length in bits is the bit length (i.e. 1024-bit RSA)
        - `e`: The public exponent, typically a relatively small prime number like 3 or 65537.
        - `d`: The private exponent, calculated using the totient `λ(n)` which is equal to `lcm(p-1, q-1)` (lcm = least common multiple).
        - `c`: The encrypted message or ciphertext
    - **Encryption**: `ciphertext(c) = plaintext^e % n`
    - **Decryption**: `plaintext = ciphertext(c)^d % n`
    
**Note**: These abbreviations nearly always used exactly like shown.

2. **Common RSA CTF Tasks**
    - Finding prime factors `p` and `q` of `n`.
    - Calculating the private key `d`.
    - Decrypting a given ciphertext.
    - Exploiting weak keys or small values of `e`.

### 2. Initial Analysis
1. **Read the Task Description**
    - Carefully read the problem statement to understand what you need to do.
    - Note any provided values like `n`, `e`, `ciphertext`, or any hints.

2. **Identify the Goal**
    - Determine if you need to find the plaintext, factorize `n`, or perform another operation.

### 3. Tools and Resources
1. **Python Libraries**
    - **SymPy**: For mathematical operations.
    - **PyCryptoDome**: For cryptographic operations.
    - **RsaCtfTool**: For automating common RSA attacks.
    - Example installation:
      ```sh
      pip install sympy pycryptodome RsaCtfTool
      ```

2. **Online Tools**
    - **factordb.com**: For factorizing large numbers.
    - **dCode**: For various cryptographic calculations.

### 4. Common RSA Tasks and Solutions
1. **Factoring `n`**
    - If `n` is small, use an online factor database like factordb.com.
    - Example Python code using SymPy:
      ```python
      from sympy import factorint
 
      n = 3233
      factors = factorint(n)
      print(factors)  # Output: {53: 1, 61: 1}, meaning n = 53 * 61
      ```

2. **Calculating `d`**
    - Once you have `p` and `q`, calculate `d` using the formula `d = e^-1 % φ(n)`, where `φ(n) = (p-1)*(q-1)`.
    - Example Python code using SymPy:
      ```python
      from sympy import mod_inverse
 
      p = 53
      q = 61
      e = 17
      phi = (p - 1) * (q - 1)
      d = mod_inverse(e, phi)
      print(d)  # Output: 2753
      ```

3. **Decrypting the Ciphertext**
    - Use the private key `d` to decrypt the ciphertext.
    - Example Python code using PyCryptoDome:
      ```python
      from Crypto.Util.number import long_to_bytes
 
      n = 3233
      d = 2753
      ciphertext = 2201
      plaintext = pow(ciphertext, d, n)
      print(long_to_bytes(plaintext))  # Convert the number to bytes to get the plaintext
      ```

4. **Using RsaCtfTool**
    - Automate common RSA attacks and calculations.

### 5. Step-by-Step Example Walkthrough

#### Scenario: Decrypting an RSA Encrypted Message
1. **Read the Task Description**
    - Task: "Decrypt the given ciphertext using the provided RSA parameters."
    - Provided: `n = 3233`, `e = 17`, `ciphertext = 2201`.

2. **Factor `n`**
    - Use SymPy or factordb.com to find `p` and `q`:
      ```python
      from sympy import factorint
 
      n = 3233
      factors = factorint(n)
      print(factors)  # Output: {53: 1, 61: 1}
      ```

3. **Calculate `d`**
    - Calculate `φ(n)` and `d`:
      ```python
      from sympy import mod_inverse
 
      p = 53
      q = 61
      e = 17
      phi = (p - 1) * (q - 1)
      d = mod_inverse(e, phi)
      print(d)  # Output: 2753
      ```

4. **Decrypt the Ciphertext**
    - Use `d` to decrypt the ciphertext:
      ```python
      from Crypto.Util.number import long_to_bytes
 
      ciphertext = 2201
      plaintext = pow(ciphertext, d, n)
      print(long_to_bytes(plaintext))  # Output: b'flag'
      ```

5. **Submit the Flag**
    - The plaintext is `flag`.

### 6. Documentation and Reporting
1. **Write Down Your Steps**
    - Document the steps you took, the tools and commands you used, and the results you got.
    - Include code snippets and explanations.

### Tools
- [`RsaCtfTool`](https://github.com/RsaCtfTool/RsaCtfTool):For automating common RSA attacks.

### Notes and Tips for Beginners
- **Understand the Basics**: Make sure you understand basic RSA concepts before diving into challenges.
- **Use Available Tools**: Don’t reinvent the wheel. Use tools and libraries to save time.
- **Practice**: The more you practice, the more familiar you’ll become with RSA-related tasks.
