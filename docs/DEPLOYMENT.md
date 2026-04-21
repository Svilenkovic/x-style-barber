# Deployment Checklist

## Static deploy koraci

1. Build static export lokalno ili u CI.
2. Sync export sadrzaja u server web root.
3. Potvrdi da su hashovani asset fajlovi i manifest dostupni.
4. Odradi smoke test na glavnim rutama.
5. Proveri browser console i Lighthouse osnovne metrike.

## Post-deploy

- proveriti da je demo notice vidljiv na sajtu
- proveriti da service worker / manifest ne cache-uju zastarele fajlove
