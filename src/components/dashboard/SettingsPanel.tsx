"use client";

import { useEffect, useState } from "react";
import { siteCopy } from "@/content/site";
import { useUser } from "@stackframe/stack";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";

export function SettingsPanel() {
    const user = useUser();
    const [name, setName] = useState("");
    const [saving, setSaving] = useState(false);
    const [status, setStatus] = useState<"idle" | "saved">("idle");
    const [error, setError] = useState<string | null>(null);
    const profileName = user?.displayName;
    const settingsCopy = siteCopy.dashboard.settingsPanel;
    const alertsCopy = settingsCopy.alerts;
    const profileCardCopy = settingsCopy.profileCard;
    const notificationsCopy = settingsCopy.notificationsCard;
    const actionLabels = profileCardCopy.actions;

    useEffect(() => {
        if (profileName === undefined) return;
        setName(profileName ?? "");
        setStatus("idle");
    }, [profileName]);

    async function handleSave(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!user) {
            setError(alertsCopy.signInToUpdate);
            return;
        }

        const nextName = name.trim();
        setSaving(true);
        setError(null);
        setStatus("idle");
        try {
            await user.update({ displayName: nextName || undefined });
            setStatus("saved");
        } catch {
            setError(alertsCopy.updateFailed);
        } finally {
            setSaving(false);
        }
    }

    if (user === undefined) {
        return <Alert severity="info">{alertsCopy.loading}</Alert>;
    }

    if (user === null) {
        return <Alert severity="warning">{alertsCopy.requireLogin}</Alert>;
    }

    return (
        <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
            <Card variant="outlined" sx={{ flex: 1 }}>
                <CardHeader title={profileCardCopy.title} subheader={profileCardCopy.subheader} />
                <CardContent component="form" onSubmit={handleSave}>
                    <Stack spacing={2}>
                        <TextField
                            label={profileCardCopy.fieldLabel}
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value);
                                setStatus("idle");
                                setError(null);
                            }}
                            autoComplete="name"
                            fullWidth
                        />
                        <Stack direction="row" spacing={2} alignItems="center">
                            <Button type="submit" variant="contained" disabled={saving}>
                                {saving
                                    ? actionLabels.saving
                                    : status === "saved"
                                        ? actionLabels.saved
                                        : actionLabels.save}
                            </Button>
                            {status === "saved" && !error && (
                                <Typography variant="body2" color="success.main">
                                    {alertsCopy.updated}
                                </Typography>
                            )}
                        </Stack>
                        {error && <Alert severity="error">{error}</Alert>}
                    </Stack>
                </CardContent>
            </Card>
            <Card variant="outlined" sx={{ flex: 1 }}>
                <CardHeader title={notificationsCopy.title} subheader={notificationsCopy.subheader} />
                <CardContent>
                    <FormGroup>
                        <FormControlLabel
                            control={<Switch defaultChecked />}
                            label={notificationsCopy.toggles[0]}
                        />
                        <FormControlLabel
                            control={<Switch />}
                            label={notificationsCopy.toggles[1]}
                        />
                    </FormGroup>
                </CardContent>
            </Card>
        </Stack>
    );
}
