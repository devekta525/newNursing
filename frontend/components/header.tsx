'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

import {
  ChevronDown,
  Menu,
  X,
  Globe,
  MapPin,
  Users,
  HelpCircle,
  ClipboardList,
  ShieldCheck,
  ImageIcon,
  Building2,
  Home,
  BriefcaseMedical,
  Stethoscope,
  Info,
  Contact,
  HeartPulse,
  Activity,
  Droplet,
  Droplets,
  Syringe,
  Bandage,
  User,
  LogOut,
  type LucideIcon,
} from 'lucide-react';

import { Button } from './ui/button';
import { useAuth } from '@/components/auth/auth-provider';
import { specialityPrograms } from '@/lib/speciality-data';

const specialityIcons = [Users, ShieldCheck, HeartPulse, Stethoscope, Activity];

type NavSubItem = {
  icon: LucideIcon;
  label: string;
  href: string;
  description?: string;
};

type NavLinkItem = {
  type: 'link';
  icon: LucideIcon;
  label: string;
  href: string;
};

type NavDropdownItem = {
  type: 'dropdown';
  label: string;
  icon: LucideIcon;
  items: NavSubItem[];
};

/* ================= NAV ITEMS ================= */

const specialityItems: NavSubItem[] = specialityPrograms.map((program, index) => ({
  icon: specialityIcons[index] ?? ClipboardList,
  label: program.title,
  description: program.shortDescription,
  href: `/speciality/${program.slug}`,
}));

const navItems: Array<NavLinkItem | NavDropdownItem> = [
  { type: 'link', icon: Home, label: 'Home', href: '/' },

  {
    type: 'dropdown',
    label: 'Services',
    icon: BriefcaseMedical,
    items: [
      { icon: Syringe, label: "IV Injection at Home", description: "Safe injection service by verified nurses at your doorstep", href: "/injection" },
      { icon: Droplets, label: "IV Drip at Home", description: "Professional IV cannulation and drip administration at home", href: "/iv-cannulation" },
      { icon: Bandage, label: "Wound Care at Home", description: "Expert wound dressing and healing care by certified nurses", href: "/wound-dressing" },
      { icon: Droplet, label: "Catheter Care at Home", description: "Safe, hygienic and private catheter care by trained nurses", href: "/catheterization" },
      { icon: Activity, label: "Feeding Tube Support at Home", description: "Safe NG tube placement and feeding care at home", href: "/nasogastric-intubation" },
      { icon: ClipboardList, label: "All Services", href: "/all-services" },
    ]
  },

  {
    type: 'dropdown',
    label: 'Speciality',
    icon: ShieldCheck,
    items: [
      ...specialityItems,
      { icon: ClipboardList, label: "View All Specialities", href: "/speciality" },
    ]
  },

  {
    type: 'dropdown',
    label: 'About',
    icon: Info,
    items: [
      { icon: ClipboardList, label: "Our Story", href: "/about" },
      { icon: HelpCircle, label: "Why Choose Us", href: "/why-us" },
      { icon: Users, label: "Our Team", href: "/team" },
      { icon: ImageIcon, label: "Gallery", href: "/gallery" },
    ]
  },

  { type: 'link', icon: BriefcaseMedical, label: 'Careers', href: '/careers' },

  // {
  //   type: 'dropdown',
  //   label: 'Locations',
  //   icon: MapPin,
  //   items: [
  //     { icon: Building2, label: "Nursingsarathi Gurugram", href: "/locations-gurugram" },
  //     { icon: Building2, label: "Nursingsarathi Lucknow", href: "/locations-lucknow" },
  //     { icon: Building2, label: "Nursingsarathi Patna", href: "/locations-patna" },
  //     { icon: Building2, label: "Nursingsarathi Indore", href: "/locations-indore" },
  //     { icon: Building2, label: "Nursingsarathi Noida", href: "/locations-noida" },
  //     { icon: Building2, label: "Nursingsarathi Ranchi", href: "/locations-ranchi" },
  //     { icon: Building2, label: "Nursingsarathi Mediclinics", href: "/mediclinics" },
  //   ]
  // },

  // {
  //   type: 'dropdown',
  //   label: 'International Patients',
  //   icon: Globe,
  //   items: [
  //     { icon: Globe, label: "International Patients", href: "/international-patients" },
  //     { icon: HelpCircle, label: "Patient Help Desk", href: "/help-desk" },
  //     { icon: MapPin, label: "Plan Your Trip", href: "/plan-your-trip" },
  //     { icon: ClipboardList, label: "Request An Estimate", href: "/request-an-estimate" },
  //     { icon: ShieldCheck, label: "Insurance Partner Network", href: "/insurance-partner-network" },
  //   ]
  // },

  { type: 'link', icon: Contact, label: 'Contact', href: '/contact' },
];

/* ================= HEADER ================= */

export default function Header() {

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  const { user, isAuthenticated, isReady, logout } = useAuth();
  const profileLabel = user?.name?.trim() || 'Profile';

  const toggle = (key: string) =>
    setActive(active === key ? null : key);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (open) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-blue-100 bg-blue-100/70 shadow-sm backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4 sm:h-[72px] xl:h-20">
            <Link href="/" className="flex shrink-0 items-center">
              <div className="relative h-11 w-[88px] sm:h-12 sm:w-[96px] md:h-14 md:w-[112px] xl:h-16 xl:w-[128px]">
                <Image
                  src="/logo_nursing_2.png"
                  alt="Nursing Sarathi"
                  fill
                  className="object-contain object-left"
                  sizes="(max-width: 639px) 88px, (max-width: 767px) 96px, (max-width: 1279px) 112px, 128px"
                  priority
                />
              </div>
            </Link>

            <nav className="hidden xl:flex flex-1 items-center justify-center gap-1 text-[14px] font-medium flex-wrap">
              {navItems.map((item, index) => {
                if (item.type === 'link') return <NavLink key={index} {...item} />;
                if (item.type === 'dropdown') return <NavDropdown key={index} {...item} />;
                return null;
              })}
            </nav>

            <div className="hidden xl:flex shrink-0 items-center gap-2">
              {isReady && !isAuthenticated && (
                <Link href="/login">
                  <Button variant="outline" className="h-10 rounded-full px-4 text-sm">
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                </Link>
              )}

              {isReady && isAuthenticated && (
                <>
                  <Link href="/profile">
                    <Button variant="outline" className="h-10 max-w-[220px] rounded-full px-4 text-sm">
                      <User className="h-4 w-4 mr-2" />
                      <span className="truncate">{profileLabel}</span>
                    </Button>
                  </Link>

                  <Button
                    variant="ghost"
                    onClick={logout}
                    className="h-10 rounded-full px-3 text-sm text-gray-700 hover:text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="h-4 w-4 mr-1.5" />
                    Logout
                  </Button>
                </>
              )}
            </div>

            <div className="flex xl:hidden items-center gap-2">
              <button
                type="button"
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                onClick={() => setOpen((current) => !current)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow-sm"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-slate-950/45 xl:hidden"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-4 top-20 z-50 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_24px_80px_rgba(15,23,42,0.22)] sm:top-[88px] xl:hidden"
            >
              <div className="space-y-2">
                {navItems.map((item, index) => {
                  if (item.type === 'link') {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-primary"
                      >
                        <Icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </Link>
                    );
                  }

                  const isExpanded = active === item.label;

                  return (
                    <div key={index} className="rounded-2xl border border-slate-200">
                      <button
                        type="button"
                        onClick={() => toggle(item.label)}
                        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-medium text-slate-700"
                      >
                        <span className="flex items-center gap-3">
                          <item.icon className="h-4 w-4" />
                          <span>{item.label}</span>
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden border-t border-slate-200"
                          >
                            <div className="space-y-1 px-3 py-3">
                              {item.items.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  href={subItem.href}
                                  onClick={() => {
                                    setOpen(false);
                                    setActive(null);
                                  }}
                                  className="flex items-start gap-3 rounded-xl px-3 py-3 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-primary"
                                >
                                  <subItem.icon className="mt-0.5 h-4 w-4 shrink-0" />
                                  <div className="min-w-0">
                                    <div className="font-medium text-slate-700">{subItem.label}</div>
                                    {subItem.description && (
                                      <p className="mt-1 text-xs leading-5 text-slate-500">
                                        {subItem.description}
                                      </p>
                                    )}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 border-t border-slate-200 pt-4">
                {isReady && !isAuthenticated && (
                  <Link href="/login" onClick={() => setOpen(false)} className="block">
                    <Button variant="outline" className="w-full rounded-full">
                      <User className="h-4 w-4 mr-2" />
                      Login
                    </Button>
                  </Link>
                )}

                {isReady && isAuthenticated && (
                  <div className="space-y-3">
                    <Link href="/profile" onClick={() => setOpen(false)} className="block">
                      <Button variant="outline" className="w-full rounded-full">
                        <User className="h-4 w-4 mr-2" />
                        <span className="truncate">{profileLabel}</span>
                      </Button>
                    </Link>
                    <Button
                      variant="ghost"
                      onClick={() => {
                        setOpen(false);
                        logout();
                      }}
                      className="w-full rounded-full"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );

}

/* ================= NAV LINK ================= */

function NavLink({ icon: Icon, label, href }: NavLinkItem) {

return (

<Link
href={href}
className="flex items-center gap-1 px-2 py-2 rounded-md whitespace-nowrap text-gray-700 hover:text-primary hover:bg-gray-50 transition"
>

<Icon className="hidden xl:block h-4 w-4" />

<span>{label}</span>

</Link>

);

}

/* ================= NAV DROPDOWN ================= */

function NavDropdown({ label, icon: Icon, items }: NavDropdownItem) {

return (

<div className="relative group">

<button className="flex items-center gap-1 px-2 py-2 rounded-md whitespace-nowrap text-gray-700 hover:text-primary hover:bg-gray-50 transition">

<Icon className="hidden xl:block h-4 w-4" />

<span>{label}</span>

<ChevronDown className="h-4 w-4 group-hover:rotate-180 transition" />

</button>

<div className="absolute top-full left-0 w-[26rem] bg-white shadow-xl rounded-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">

<div className="p-2 grid gap-1">

{items.map((item: any, idx: number) => (

<Link
key={idx}
href={item.href}
className="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 text-sm"
>

<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">

<item.icon className="w-4 h-4 text-primary" />

</div>

<div className="min-w-0">

<div className="font-medium text-gray-900">{item.label}</div>

{item.description ? (

<p className="mt-1 text-xs leading-5 text-gray-500">{item.description}</p>

) : null}

</div>

</Link>

))}

</div>

</div>

</div>

);

}
