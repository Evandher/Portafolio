import MainLayout from '../layouts/MainLayout'

const experienceLog = [
  { date: '2023-08-01 09:00', action: 'Started working at Kbits Intl' },
  { date: '2023-11-15 14:33', action: 'Migrated server to Azure ☁️' },
  { date: '2024-05-03 16:21', action: 'Implemented chatbot for ERP support 🤖' },
  { date: '2025-01-17 10:10', action: 'Rediseño UI estilo terminal neon' },
]

export default function Experience() {
  return (
    <MainLayout>
      <h2 className="text-neon-cyan text-lg mb-4">📜 Historial de experiencia</h2>

      <div className="text-soft-white space-y-2 text-sm">
        {experienceLog.map((entry, i) => (
          <p key={i} className="whitespace-pre">
            [ {entry.date} ] &gt; {entry.action}
          </p>
        ))}
      </div>
    </MainLayout>
  )
}
