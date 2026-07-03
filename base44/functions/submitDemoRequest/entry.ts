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

    try {
      await base44.asServiceRole.integrations.Core.SendEmail({
        to: email,
        subject: 'Hemos recibido tu solicitud de demo — Next Reporting',
        body: [
          `Hola ${name},`,
          '',
          'Hemos recibido tu solicitud de demo de Next Reporting.',
          `Rol: ${role}`,
          company ? `Empresa: ${company}` : '',
          '',
          'Nuestro equipo te contactará en menos de 24 horas para agendar una sesión de 30 minutos con tus datos reales.',
          '',
          'Un saludo,',
          'Equipo Next Finance',
        ].filter(Boolean).join('\n'),
      });
    } catch (_emailErr) {
      // Email failure shouldn't block the demo request
    }

    return Response.json({ success: true, id: record.id });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});