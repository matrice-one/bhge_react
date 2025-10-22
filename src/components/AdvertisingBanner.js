import React from "react";
import { Box, Container, Stack, Typography, Chip, Button, Divider } from "@mui/material";

/**
 * BHGE × Automnales — Hero final
 * - Split 50/50, image jamais couverte
 * - Dégradé sable → mer (palette BHGE)
 * - Tags cliquables → programme "beach"
 * - Deux CTA distincts : Tournois + Initiations (Google Forms)
 * - Lien exposant conservé
 */

const PROGRAM_URL =
  "https://billetterie.automnales.ch/programme-automnales?_gl=1*dh27t8*_gcl_au*MTg0MzA5NjE2NC4xNzU3NDM0MTIz*_ga*MTMzODExMDM1LjE3NTc0MzQxMjM.*_ga_T2VQ7QYRHB*czE3NjExMTcxNTMkbzMkZzEkdDE3NjExMTc3MjkkajQxJGwwJGgw&search=beach";

const EXHIBITOR_URL =
  "https://billetterie.automnales.ch/exposants-automnales-detail/beach-halle-geneve-401222";

// ⚠️ Liens fournis par l'utilisatrice (format edit). Les laisser tels quels.
const FORM_TOURNOIS =
  "https://docs.google.com/forms/d/e/1FAIpQLSe1z_8OuzbUnMxslcDzArt5otavEwQ5yfENprbnL7yY-qRsuA/viewform?usp=publish-editor";
const FORM_INITIATIONS =
  "https://docs.google.com/forms/d/e/1FAIpQLSfNSp3vUdtTffCvjhoElyPQy8-q9AUZMOHqzvrlwgswp4-4UQ/viewform?usp=publish-editor";

const TAGS = [
  "Initiations au beach-volley",
  "Tournois",
  "Rencontres avec le club",
  "Matchs de démonstration",
];

const bubbles = `
radial-gradient(900px 420px at 12% 18%, rgba(56,243,179,.12) 0%, rgba(56,243,179,0) 60%),
radial-gradient(1100px 500px at 82% 30%, rgba(0,224,255,.10) 0%, rgba(0,224,255,0) 65%),
radial-gradient(800px 420px at 20% 86%, rgba(255,255,255,.08) 0%, rgba(255,255,255,0) 60%)
`;

export default function AdvertisingBanner() {
  return (
    <Box
      id="automnales-hero"
      sx={(theme) => ({
        width: "100%",
        color: theme.palette.mode === "dark" ? "#fff" : "#0b1220",
        py: { xs: 6, md: 10 },
        backgroundImage: `
          linear-gradient(
            180deg,
            ${theme.palette.quaternary?.main || "#fbe6be"} 0%,
            rgba(251,230,190,0.94) 8%,
            rgba(0,152,254,0.12) 42%,
            rgba(0,152,254,0.26) 66%,
            ${theme.palette.tertiary?.main || "#0098fe"} 100%
          ),
          ${bubbles}
        `,
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
      })}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" },
            gap: { xs: 3, md: 4 },
            alignItems: "stretch",
          }}
        >
          {/* Colonne gauche — contenu */}
          <Box
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column",
              gap: 2,
              backdropFilter: "blur(8px)",
              background:
                theme.palette.mode === "dark" ? "rgba(3,6,25,.46)" : "rgba(255,255,255,.55)",
              border: `1px solid ${
                theme.palette.mode === "dark" ? "rgba(255,255,255,.12)" : "rgba(0,0,0,.08)"
              }`,
              boxShadow:
                theme.palette.mode === "dark"
                  ? "0 14px 44px rgba(0,0,0,.5)"
                  : "0 14px 44px rgba(0,0,0,.15)",
              borderRadius: 4,
              p: { xs: 3, md: 5 },
            })}
          >
            <Stack spacing={2}>
              <Typography variant="overline" sx={{ fontWeight: 800, letterSpacing: 1.3 }}>
                BHGE est aux
              </Typography>

              <Stack direction="row" alignItems="center" spacing={2}>
                <Typography
                  variant="h2"
                  sx={{ fontFamily: "Staatliches", fontSize: { xs: "2.4rem", md: "3.6rem" }, lineHeight: 1 }}
                >
                  Automnales
                </Typography>
                <Box
                  sx={(theme) => ({
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 999,
                    fontWeight: 700,
                    fontSize: ".95rem",
                    background: theme.palette.tertiary?.main || "#0098fe",
                    color: "#fff",
                  })}
                >
                  7 → 16 novembre
                </Box>
              </Stack>

              <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: 820 }}>
                Fun et vibes ensablées. Viens tester, rencontrer l’équipe et découvrir nos
                animations beach tout au long du salon.
              </Typography>

              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {TAGS.map((label) => (
                  <Chip
                    key={label}
                    label={label}
                    variant="outlined"
                    clickable
                    component="a"
                    href={PROGRAM_URL}
                    target="_blank"
                    rel="noopener"
                    sx={{ borderRadius: 2, backdropFilter: "blur(4px)", fontWeight: 500 }}
                  />
                ))}
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ pt: 1 }}>
                <Button
                  variant="contained"
                  size="large"
                  color="tertiary"
                  href={PROGRAM_URL}
                  target="_blank"
                  rel="noopener"
                  sx={{ px: 3, fontWeight: 700, textTransform: "none", borderRadius: 2 }}
                >
                  Voir le programme beach
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  color="secondary"
                  href={EXHIBITOR_URL}
                  target="_blank"
                  rel="noopener"
                  sx={{ px: 3, borderRadius: 2, textTransform: "none" }}
                >
                  Où nous rencontrer sur place
                </Button>
              </Stack>

              <Divider sx={{ my: 1.5, opacity: 0.4 }} />

              {/* CTA formulaires distincts */}
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  variant="outlined"
                  size="large"
                  color="tertiary"
                  href={FORM_TOURNOIS}
                  target="_blank"
                  rel="noopener"
                  sx={{ px: 3, borderRadius: 2, textTransform: "none", fontWeight: 700 }}
                >
                  S’inscrire aux tournois
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  color="secondary"
                  href={FORM_INITIATIONS}
                  target="_blank"
                  rel="noopener"
                  sx={{ px: 3, borderRadius: 2, textTransform: "none", fontWeight: 700 }}
                >
                  S’inscrire aux initiations
                </Button>
              </Stack>

             
            </Stack>
          </Box>

          {/* Colonne droite — image indépendante, centrée */}
          <Box
            aria-hidden
            sx={{
              position: "relative",
              minHeight: { xs: 260, md: 560 },
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: "0 14px 44px rgba(0,0,0,.18)",
              backgroundImage: "url(/automnales.png)",
              backgroundSize: "cover", // plein cadre pour un rendu plus "hero"
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Cadre subtil en haut pour rappeler le panneau verré */}
            <Box
              sx={(theme) => ({
                position: "absolute",
                inset: 0,
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(180deg, rgba(3,6,25,.20) 0%, rgba(3,6,25,0) 40%)"
                    : "linear-gradient(180deg, rgba(255,255,255,.18) 0%, rgba(255,255,255,0) 40%)",
              })}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}