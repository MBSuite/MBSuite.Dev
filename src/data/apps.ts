/**
 * MBSuite Applications Configuration
 * Last verified: 2026-11-09
 */

export interface AppConfig {
  id: string
  slug: string
  name: string
  title: string
  descShort: string
  descLong: string
  url: string
  status: 'live' | 'beta' | 'development'
  targetAudience: string
  keyFeatures: string[]
  icon?: string
}

export const APPS: AppConfig[] = [
  {
    id: 'core',
    slug: 'core',
    name: 'MBSuite Core',
    title: 'Accounting & Business Management',
    descShort: 'Accounting, documents and financial reports',
    descLong:
      'Central accounting and business management for Thai SMEs. Manage quotations, invoices, expenses, journal entries and reports. Consolidated books and tax workflows for organizations with branches or departments.',
    url: 'https://micro-business-suite.vercel.app/',
    status: 'live',
    targetAudience: 'All businesses using MBSuite',
    keyFeatures: [
      'Accounting and documents',
      'Profit and loss reports',
      'Cash flow and tax summaries',
      'Multi-user access with roles',
      'Optional add-on modules',
    ],
  },
  {
    id: 'service',
    slug: 'service',
    name: 'Service Suite',
    title: 'Service Businesses & Consultants',
    descShort: 'Appointments, quotations and service management',
    descLong:
      'Standalone SaaS for service providers. Manage service catalogs, appointment booking and scheduling, service contracts, job tracking and renewal reminders.',
    url: 'https://micro-business-service.vercel.app/',
    status: 'live',
    targetAudience: 'Consultants, service teams, repair shops',
    keyFeatures: [
      'Service catalog management',
      'Appointment scheduling',
      'Service contracts and quotations',
      'Job tracking and status',
      'Contract renewal reminders',
    ],
  },
  {
    id: 'retail',
    slug: 'retail',
    name: 'Retail Suite',
    title: 'Retail & Wholesale',
    descShort: 'POS, inventory and barcode management',
    descLong:
      'Standalone SaaS for retail shops and wholesalers. Manage product catalogs, stock levels, barcode scanning at checkout, daily sales closing and inventory movements.',
    url: 'https://micro-business-retail.vercel.app/',
    status: 'live',
    targetAudience: 'Retail shops, wholesalers, supermarkets',
    keyFeatures: [
      'Product catalog with prices',
      'Barcode and QR code support',
      'POS checkout and payment',
      'Daily sales reports',
      'Low-stock and inventory alerts',
    ],
  },
  {
    id: 'fnb',
    slug: 'fnb',
    name: 'F&B Suite',
    title: 'Restaurants & Cafes',
    descShort: 'QR ordering, tables, kitchen orders and billing',
    descLong:
      'Standalone SaaS for food and beverage operations. Manage QR ordering, table layouts, kitchen order tickets, bill management, payment processing and daily revenue operations.',
    url: 'https://micro-business-fnb.vercel.app/',
    status: 'live',
    targetAudience: 'Restaurants, cafes, food service providers',
    keyFeatures: [
      'QR code table ordering',
      'Table and bill management',
      'Kitchen order tickets (KOT)',
      'Multi-payment support',
      'Daily sales and kitchen reports',
    ],
  },
  {
    id: 'hotel',
    slug: 'hotel',
    name: 'Hotel Suite',
    title: 'Room Booking & Accommodation',
    descShort: 'Room stays, reservations and guest management',
    descLong:
      'Standalone SaaS for small hotels and short-stay accommodation. Manage daily room stays, reservations, guest arrivals and departures, housekeeping status and daily revenue operations.',
    url: 'https://micro-business-hotel.vercel.app/',
    status: 'live',
    targetAudience: 'Hotels, guesthouses, short-stay operators',
    keyFeatures: [
      'Room booking and reservations',
      'Guest check-in and check-out',
      'Housekeeping management',
      'Daily revenue tracking',
      'Availability management',
    ],
  },
  {
    id: 'rental',
    slug: 'rental',
    name: 'Rental Suite',
    title: 'Rental & Long-Term Leases',
    descShort: 'Rental assets, contracts and rent collection',
    descLong:
      'Standalone SaaS for landlords and rental operators. Manage rental properties and vehicles, lease agreements, rent schedules and payment collection, renewal reminders and maintenance tracking.',
    url: 'https://micro-business-rental.vercel.app/',
    status: 'live',
    targetAudience: 'Landlords, property managers, rental businesses',
    keyFeatures: [
      'Asset and property management',
      'Lease contracts and scheduling',
      'Rent payment collection',
      'Renewal and overdue reminders',
      'Maintenance tracking',
    ],
  },
  {
    id: 'pharmacy',
    slug: 'pharmacy',
    name: 'Pharmacy Suite',
    title: 'Pharmacies & Medicine Management',
    descShort: 'Medicine inventory, batches and expiry tracking',
    descLong:
      'Standalone SaaS for pharmacies. Manage medicine catalogs with batch-level stock, expiry dates, low-stock and near-expiry alerts, and auditable stock movements.',
    url: 'https://micro-business-pharmacy.vercel.app/',
    status: 'live',
    targetAudience: 'Pharmacies, drug stores, healthcare retailers',
    keyFeatures: [
      'Medicine catalog and pricing',
      'Batch-level stock tracking',
      'Expiry date management',
      'Low-stock alerts',
      'Near-expiry notifications',
    ],
  },
]

export function getAppBySlug(slug: string): AppConfig | undefined {
  return APPS.find((app) => app.slug === slug)
}

export function getAppById(id: string): AppConfig | undefined {
  return APPS.find((app) => app.id === id)
}
