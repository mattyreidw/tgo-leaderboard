type BannerProps = {
    title: string;
    subtitle?: string;
    children?: React.ReactNode;
  };
  
  export default function DonateBanner({ title, subtitle, children }: BannerProps) {
    return (
      <div className="space-y-4 w-full p-6 text-white bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl shadow mb-6">
        <h2 className="text-2xl font-semibold">{title}</h2>
        {subtitle && <p className="mt-1">{subtitle}</p>}
        {children && <div className="mt-4">{children}</div>}
      </div>
    );
  }
  