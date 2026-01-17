
import React from 'react';
import { useApp } from '../store';

const Dashboard: React.FC = () => {
  const { getStats } = useApp();
  const stats = getStats();

  const cards = [
    { title: 'الخروج اليومي', value: stats.dailyOut, color: 'blue', icon: 'local_shipping' },
    { title: 'تم التسليم', value: stats.delivered, color: 'green', icon: 'done_all' },
    { title: 'فشل التسليم', value: stats.failed, color: 'red', icon: 'error' },
    { title: 'المرتجع', value: stats.returned, color: 'slate', icon: 'assignment_return' },
    { title: 'تم التحصيل', value: stats.collected, color: 'teal', icon: 'payments' },
    { title: 'تأخير تحديث', value: stats.delayedUpdate, color: 'orange', icon: 'update', sub: 'فوق 4 أيام من الخروج' },
    { title: 'تأخير تحصيل', value: stats.delayedCollection, color: 'yellow', icon: 'timer', sub: 'فوق 7 أيام من التسليم' },
    { title: 'تأخير مرتجع', value: stats.delayedReturn, color: 'purple', icon: 'history', sub: 'فوق 7 أيام من الفشل' },
  ];

  return (
    <div className="p-6">
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">نظرة عامة SellMate</h2>
          <p className="text-slate-500">إحصائيات النظام المحدثة لحظياً</p>
        </div>
        <div className="bg-white px-4 py-2 rounded-2xl shadow-sm border border-slate-100 flex items-center space-x-2 space-x-reverse">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-bold text-slate-600">النظام متصل</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <div key={idx} className={`bg-white rounded-3xl p-6 shadow-sm border-r-4 border-${card.color}-500 transition-all hover:shadow-md`}>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-500 font-medium text-sm mb-1">{card.title}</p>
                <h3 className={`text-4xl font-extrabold text-${card.color}-600`}>{card.value}</h3>
              </div>
              <div className={`p-3 bg-${card.color}-50 rounded-2xl`}>
                <span className={`material-icons text-${card.color}-500`}>{card.icon}</span>
              </div>
            </div>
            {card.sub && <p className={`mt-2 text-xs font-semibold text-${card.color}-400`}>{card.sub}</p>}
          </div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 text-white shadow-xl">
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="material-icons">info</span> تنبيهات الأداء
          </h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl">
              <span>نسبة التسليم</span>
              <span className="text-green-400 font-bold">
                {stats.dailyOut > 0 ? ((stats.delivered / stats.dailyOut) * 100).toFixed(1) : 0}%
              </span>
            </div>
            <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl">
              <span>نسبة المرتجعات</span>
              <span className="text-red-400 font-bold">
                {stats.dailyOut > 0 ? ((stats.returned / stats.dailyOut) * 100).toFixed(1) : 0}%
              </span>
            </div>
          </div>
        </div>
        <div className="bg-blue-600 rounded-3xl p-8 text-white">
          <h4 className="text-xl font-bold mb-4">الدعم الفني SellMate</h4>
          <p className="text-blue-100 text-sm leading-relaxed">
            النظام يدعم حالياً معالجة 50,000 شحنة شهرياً. لطلب ميزات إضافية أو تقارير مخصصة، يرجى التواصل مع الإدارة.
          </p>
          <button className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-xl font-bold text-sm">فتح تذكرة</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
