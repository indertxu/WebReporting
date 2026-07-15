import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json();
    const { name, email, role, company } = body;

    if (!name || !email || !role) {
      return Response.json(
        { error: 'Faltan campos obligatorios: nombre, email y rol.' },
        { status: 400 }
      );
    }

    const record = await base44.asServiceRole.entities.DemoRequest.create({
      name,
      email,
      role,
      company: company || '',
      status: 'new',
    });

    const htmlBody = `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Solicitud recibida — Next Reporting</title>
</head>
<body style="margin:0;padding:0;background-color:#F4F7F5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#1F2937;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F4F7F5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background-color:#FFFFFF;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(6,78,59,0.08);">

          <!-- Header con logo -->
          <tr>
            <td style="background:linear-gradient(135deg,#064E3B 0%,#059669 100%);padding:32px 40px;text-align:center;">
              <div style="font-size:24px;font-weight:800;letter-spacing:-0.5px;color:#FFFFFF;">
                Next Reporting
              </div>
              <div style="font-size:10px;font-weight:600;letter-spacing:2px;color:#A7F3D0;text-transform:uppercase;margin-top:4px;">
                by Next Finance
              </div>
            </td>
          </tr>

          <!-- Cuerpo -->
          <tr>
            <td style="padding:40px;">
              <h1 style="margin:0 0 16px 0;font-size:22px;font-weight:700;color:#064E3B;line-height:1.3;">
                Hola ${name},
              </h1>

              <p style="margin:0 0 20px 0;font-size:15px;line-height:1.6;color:#374151;">
                Gracias por reservar tu demo con <strong>Next Reporting</strong>. Estamos deseando conocerte y enseñarte de cerca cómo podemos hacer que tu reporting financiero deje de ser una carga y se convierta en una ventaja para tu equipo.
              </p>

              <p style="margin:0 0 24px 0;font-size:15px;line-height:1.6;color:#374151;">
                Hemos recibido tu solicitud correctamente. Nuestro equipo se pondrá en contacto contigo en <strong>menos de 24 horas</strong> para agendar una sesión de 30 minutos, adaptada a tu contexto y con tus datos reales.
              </p>

              <!-- Datos de la solicitud -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F0FDF4;border:1px solid #A7F3D0;border-radius:12px;margin:24px 0;">
                <tr>
                  <td style="padding:20px 24px;">
                    <div style="font-size:10px;font-weight:700;letter-spacing:1.5px;color:#059669;text-transform:uppercase;margin-bottom:12px;">
                      Datos de tu solicitud
                    </div>
                    <div style="font-size:14px;color:#1F2937;line-height:1.8;">
                      <strong>Nombre:</strong> ${name}<br>
                      <strong>Email:</strong> ${email}<br>
                      <strong>Rol:</strong> ${role}
                      ${company ? `<br><strong>Empresa:</strong> ${company}` : ''}
                    </div>
                  </td>
                </tr>
              </table>

              <p style="margin:24px 0 0 0;font-size:14px;line-height:1.6;color:#6B7280;">
                Mientras tanto, si tienes cualquier duda puedes responder directamente a este correo — nos llega al equipo comercial.
              </p>

              <p style="margin:32px 0 0 0;font-size:15px;color:#374151;">
                Un saludo,<br>
                <strong style="color:#064E3B;">Equipo Next Finance</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#F9FAFB;padding:24px 40px;border-top:1px solid #E5E7EB;text-align:center;">
              <div style="font-size:11px;color:#9CA3AF;letter-spacing:1px;text-transform:uppercase;font-weight:600;">
                Madrid · Copenhague · ES · PT · EN · DA
              </div>
              <div style="font-size:11px;color:#9CA3AF;margin-top:8px;">
                © 2026 Next Finance · <a href="mailto:info@atebiz.com" style="color:#059669;text-decoration:none;">info@atebiz.com</a>
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

    try {
      await base44.asServiceRole.integrations.Core.SendEmail({
        to: email,
        subject: 'Hemos recibido tu solicitud de demo — Next Reporting',
        body: htmlBody,
      });
    } catch (_emailErr) {
      // Email failure shouldn't block the demo request
    }

    return Response.json({ success: true, id: record.id });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});