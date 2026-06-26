import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const { error } = await resend.emails.send({
      from: "helloNova <hellonova@hudo.co.in>",
      to: email,
      subject: "Welcome to helloNova 🚀",

      html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>helloNova</title>
</head>

<body style="
margin:0;
padding:40px 20px;
background:#F5F9FF;
font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;
">

<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center">

<table
width="640"
cellpadding="0"
cellspacing="0"
style="
max-width:640px;
background:#ffffff;
border-radius:36px;
overflow:hidden;
box-shadow:0 30px 80px rgba(0, 81, 255, 0.31);
">

<!-- HERO -->

<tr>
<td
style="
padding:70px 50px;
background:linear-gradient(135deg,#3B82F6 0%,#93C5FD 100%);
text-align:center;
">

<div
style="
display:inline-block;
padding:12px 28px;
border-radius:999px;
border:1px solid rgba(255,255,255,.3);
background:rgba(255,255,255,.12);
font-size:13px;
letter-spacing:2px;
font-weight:600;
color:#fff;
">
WELCOME
</div>

<div style="height:42px"></div>

<div style="text-align:center;">

<img
src="https://hudo.co.in/icon.png"
alt="helloNova"
width="280"
style="
display:block;
margin:0 auto;
width:280px;
max-width:100%;
height:auto;
border:0;
outline:none;
text-decoration:none;
"
/>

</div>
<div style="height:26px"></div>

<h1
style="
margin:0;
font-size:58px;
line-height:64px;
font-weight:800;
color:#111827;
">
Your AI<br>
Call Assistant.
</h1>

<div style="height:28px"></div>

<p
style="
margin:0 auto;
max-width:470px;
font-size:19px;
line-height:34px;
color:rgba(255,255,255,.95);
">
You're officially on the waitlist.
We'll keep you updated as we get closer to launch.
</p>

</td>
</tr>

<!-- CONTENT -->

<tr>

<td
style="
padding:60px 52px;
background:#F8FBFF;
">

<h2
style="
margin:0;
font-size:34px;
line-height:48px;
font-weight:700;
color:#111827;
">
Help us build something you'll actually use.
</h2>

<div style="height:38px"></div>

<table
width="100%"
cellpadding="0"
cellspacing="0"
style="
background:#EEF6FF;
border:1px solid #D9E9FF;
border-radius:28px;
">

<tr>
<td style="padding:40px;">

<p
style="
margin:0;
font-size:19px;
line-height:36px;
color:#475569;
">

Could you spare
<strong>30 seconds</strong>
to answer a few questions?

<br><br>

</p>

<div style="height:36px"></div>

<table cellpadding="0" cellspacing="0">
<tr>

<td
style="
background:#2563EB;
border-radius:999px;
">

<a
href="https://commit-survey-app.vercel.app/"
style="
display:inline-block;
padding:18px 42px;
font-size:18px;
font-weight:700;
color:white;
text-decoration:none;
">

Take the Survey →

</a>

</td>

</tr>
</table>

</td>
</tr>

</table>

</td>

</tr>

<!-- FOOTER -->

<tr>

<td
style="
padding:40px;
text-align:center;
background:#ffffff;
border-top:1px solid #E2E8F0;
">

<div
style="
font-size:34px;
font-weight:700;
color:#94A3B8;
">

HUDO

</div>

</td>

</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`,
    });

    if (error) {
      return NextResponse.json(error, { status: 400 });
    }

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}