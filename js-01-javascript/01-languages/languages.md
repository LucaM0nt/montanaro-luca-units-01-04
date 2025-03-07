# Languages exercise

## Linguaggi compilati: C, C++, Rust, Swift
- `C` >> Compilato con GCC o Clang generando file binari eseguibili direttamente dalla CPU senza interpreti.
- `C++` >> Stessa logica di C.
- `Rust` >> Compilato tramite rustc.
- `Swift` >> Compilato usando Xcode’s Clang-based per MacOS/iOS.

## Linguaggi interpretati: Python, PHP, Ruby, Javascript
- `Python` >> Interpretato da CPython, Jython, or PyPy 
- `Ruby` >> Interpretato con MRI o JRuby
- `PHP` >> Interpretato per poter essere eseguito direttamente nei server web.
- `JavaScript` >> Storicamente interpretato nei browser, ciascun browser ha il suo interprete js come V8 (Chrome) o SpiderMonkey (Firefox)

## Esistono anche linguaggi ibridi o casi speciali: Java, C#, Kotlin, Dart 
- `Java` >> non viene compilato in linguaggio macchina ma in uno intermedio (bytecode) che viene eseguito dalla Virtual Machine Java che può sia interpretarlo che eseguire una JIT Just in Time Compilation (compilazione dinamica).
- `C#` >> non compila direttamente in codice macchina, ma in bytecode CIL (Common Intermediate Language), che viene eseguito dalla .NET CLR (Common Language Runtime). La CLR usa una compilazione JIT.
- `Kotlin` >> può essere compilato o compilato JIT e poi anche interpretato in base all'uso (web, mobile, nativo...).
- `Dart` >>> a seconda dell'uso può essere compilato JIT oppure AOT (Ahead of time).