## RSA Encryption CTF Template for Beginners

### 1. Initial Analysis
1. **Read the Task Description**
   - Carefully read the problem statement to understand what you need to do.
   - Note any provided values like `n`, `e`, `ciphertext`, or any hints.

Usually the provided information looks like this:
```text
cyphertext = 10400286653072418349777706076384847966640064725838262071
n = 23519325203263800569051788832344215043304346715918641803
e = 71
```
**Note:** `cypertext` sometimes can just be `c`

2. **Identify the Goal**
   - Determine if you need to find the plaintext, factorize `n`, or perform another operation.

#### Tips for Beginners
- **Understand the Basics**: Make sure you understand basic RSA concepts before diving into challenges.
- **Use Available Tools**: Don’t reinvent the wheel. Use tools and libraries to save time.
- **Practice**: The more you practice, the more familiar you’ll become with RSA-related tasks.
   
### 2. Understanding RSA Encryption
1. **Basic Concepts**
   - **RSA Keys**: Consist of a public key `(n, e)` and a private key `(n, d)`.
       - `n`: The modulus, a product of two prime numbers `p` and `q`, its length in bits is the bit length (i.e. 1024 bit RSA).
       - `e`: The public exponent, typically a relatively small prime number like 3 or 65537.
       - `d`: The private exponent, calculated using `p`, `q`, and `e`.
       - `c`: The encrypted message i.e., the cyphertext
       - `λ(n)`: The totient, is used to compute d and is equal to the `lcm(p-1, q-1)` [lcm = least common multiple], another definition for `λ(n) is that λ(pq) = lcm(λ(p), λ(q))`
   - **Encryption**: `ciphertext(c) = plaintext^e % n`
   - **Decryption**: `plaintext(c) = ciphertext^d % n`

2. **Common RSA CTF Tasks**
   - Factoring `n` to find `p` and `q`.
   - Calculating the private key `d`.
   - Decrypting a given ciphertext.
   - Exploiting weak keys or small values of `e`.


### 3. Common RSA Scenarios and Solutions
In most tasks the single components are not yet known. Therefore, as a preparatory step the known parts sometimes have to be decomposed into their components:
1. **Factoring `n`**
   - **Scenario**:Only `n` is given, it needs to be factored to find `p` and `q`.
      
      This is usually just a preparation step for finding  `d`
   - The easiest way is to use [factordb.com](http://factordb.com/), but it can also be done in python.
   - **Python example**:
     ```python
     from sympy import factorint

     n = 3233
     factors = factorint(n)
     print(factors)  # Output: {53: 1, 61: 1}, meaning n = 53 * 61
     ```

2. **Calculating `d`**
   - **Scenario**: Given `p`, `q`, and `e`, calculate the private key `d`.
   - **Example**:
     ```python
     from sympy import mod_inverse

     p = 53
     q = 61
     e = 17
     phi = (p - 1) * (q - 1)
     d = mod_inverse(e, phi)
     print(d)  # Output: 2753
     ```

Solving for the flag in relatively simple scenarios:
1. **Decrypting the Ciphertext**
   - **Scenario**: Given `n`, `d`, and `ciphertext`, find the plaintext.
   - **Example**:
     ```python
     from Crypto.Util.number import long_to_bytes

     n = 3233
     d = 2753
     ciphertext = 2201
     plaintext = pow(ciphertext, d, n)
     print(long_to_bytes(plaintext))  # Convert the number to bytes to get the plaintext
     ```

2. **Low Public Exponent Attack**
   - **Scenario**: Given a small `e` (like 3) and the ciphertext, decrypt without factoring `n`.
   - **Example**:
     ```python
     from sympy import integer_nthroot
     from Crypto.Util.number import long_to_bytes

     e = 3
     n = 3233
     ciphertext = 2201
     m, exact = integer_nthroot(ciphertext, e)
     if exact:
         print(long_to_bytes(m))  # Output: decrypted message
     ```
3. **Common Modulus Attack**
   - **Scenario**: Given two ciphertexts encrypted with the same `n` but different `e`, find the plaintext.
   - **Example**:
     ```python
     from sympy import gcd

     n = 3233
     e1, e2 = 17, 11
     c1, c2 = 2201, 321

     def egcd(a, b):
         if b == 0:
             return a, 1, 0
         g, x1, y1 = egcd(b, a % b)
         x = y1
         y = x1 - (a // b) * y1
         return g, x, y

     g, x, y = egcd(e1, e2)
     m1 = pow(c1, x, n)
     m2 = pow(c2, y, n)
     plaintext = (m1 * m2) % n
     print(long_to_bytes(plaintext))  # Output: decrypted message
     ```
4. **Using RsaCtfTool**

   There is a way to automate those attacks and use different attack patterns. However, there are some major drawbacks in just using this tool. 
   Mainly that some tasks require immense amounts of CPU power.

     ` **Note:** if possible try to solve the task with some shortcuts and only use the RsaCtfTool as a last resort.`
   
   For using the tool it has to first installed a detailed Guide can be found on the [GitHub site for RsaCtfTool](https://github.com/RsaCtfTool/RsaCtfTool?tab=readme-ov-file). An overview of all possible commands looks like this:
```text
RsaCtfTool.py [-h] [--publickey PUBLICKEY] [--output OUTPUT] [--timeout TIMEOUT] [--createpub] [--dumpkey] [--ext] [--decryptfile DECRYPTFILE] [--decrypt DECRYPT]
                     [--verbosity {CRITICAL,ERROR,WARNING,DEBUG,INFO}] [--private] [--tests] [--ecmdigits ECMDIGITS] [-n N] [-p P] [-q Q] [-e E] [--key KEY]
                     [--password PASSWORD] [--show-factors SHOW_FACTORS]
                     [--attack {SQUFOF,XYXZ,binary_polinomial_factoring,brent,comfact_cn,cube_root,ecm,ecm2,factordb,fermat_numbers_gcd,fibonacci_gcd,highandlowbitsequal,mersenne_pm1_gcd,mersenne_primes,neca,nonRSA,noveltyprimes,pastctfprimes,pisano_period,pollard_p_1,primorial_pm1_gcd,qicheng,roca,siqs,small_crt_exp,smallfraction,smallq,system_primes_gcd,wolframalpha,wiener,boneh_durfee,euler,pollard_rho,williams_pp1,partial_q,partial_d,londahl,z3_solver,dixon,lehmer,fermat,hart,common_factors,common_modulus,same_n_huge_e,hastads,lattice,lehman,carmichael,qs,classical_shor,all} [{SQUFOF,XYXZ,binary_polinomial_factoring,brent,comfact_cn,cube_root,ecm,ecm2,factordb,fermat_numbers_gcd,fibonacci_gcd,highandlowbitsequal,mersenne_pm1_gcd,mersenne_primes,neca,nonRSA,noveltyprimes,pastctfprimes,pisano_period,pollard_p_1,primorial_pm1_gcd,qicheng,roca,siqs,small_crt_exp,smallfraction,smallq,system_primes_gcd,wolframalpha,wiener,boneh_durfee,euler,pollard_rho,williams_pp1,partial_q,partial_d,londahl,z3_solver,dixon,lehmer,fermat,hart,common_factors,common_modulus,same_n_huge_e,hastads,lattice,lehman,carmichael,qs,classical_shor,factorial_pm1_gcd,lucas_gcd,all} ...]]
                     [--sendtofdb] [--isconspicuous] [--isroca] [--convert_idrsa_pub] [--check_publickey] [--partial]
```
An overview over the possible usage of this tool can be found on [GitHub RsaCtfTool - Usage.](https://github.com/RsaCtfTool/RsaCtfTool?tab=readme-ov-file#usage)

### 4. Documenting and Submitting the Flag
1. **Write Down Your Steps**
   - Document the steps you took, the tools and commands you used, and the results you got.
   - Include code snippets and explanations.

2. **Submit the Flag**
   - Enter the captured flag into the CTF platform according to the rules.

---
### Tools
These are just some tools that can be used but don't have to be used. 
1. **Python Libraries**
   - [**SymPy**](https://www.sympy.org/en/index.html): For mathematical operations.
   - [**PyCryptoDome**](https://pypi.org/project/pycryptodome/): For cryptographic operations.
   - [**RsaCtfTool**](https://github.com/RsaCtfTool/RsaCtfTool): For automating common RSA attacks.
2. **Online Tools**
   - [**factordb.com**](http://factordb.com/): For factorizing large numbers.
   - [**dCode**](https://www.dcode.fr/rsa-cipher): For calculating RSA cyphers where every component is known, and the task is not too complex.

### Resources
1. **General information:**
- [ctf101.org - RSA](https://ctf101.org/cryptography/what-is-rsa/)
- [Wikipedia RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem))
- [Detailed Explanation](https://brilliant.org/wiki/rsa-encryption/)

2. **Writeups:**
- [Collection of basic RSA challenges](https://medium.com/@hva314/some-basic-rsa-challenges-in-ctf-part-1-some-basic-math-on-rsa-5663fa337c27)
- [Deconstruct CTF](https://c12yptonic.github.io/ctf-writeups/ctfs/deconstructf21#rsa-2-)
- [CRTYPTO](https://noob-atbash.github.io/CTF-writeups/csictf-20/crypto/crypto.html)

3. **Training:**
- [cryptohack.com](https://cryptohack.org/challenges/rsa/)
- [picoGym](https://play.picoctf.org/practice)

