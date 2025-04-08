import Image from "next/image";

export default function Header() {
    return (
        <div className="space-y-4 bg-white rounded-2xl p-6 border border-gray-200 mb-6 flex items-center gap-6">
            <Image
                src="/logo_v31.png"
                alt="My photo"
                width={68}
                height={68}
                className="rounded-2xl m-0"
            />
            <h1 className="text-3xl font-semibold">TGO Spring Games 2025</h1>
        </div>
    )
}