import { Calendar, Github, Mail, MapPin, Phone, User } from "lucide-react";
import DecryptedText from "../Text/DecryptedText";
import Link from "next/link";

type CardDetailProps = {
  name: string;
  role: string;
  email: string;
  github: string;
  location: string;
  phone: string;
  joinDate: string;
};

const CardDetail: React.FC<CardDetailProps> = ({ name, role, email, github, location, phone, joinDate }) => {
  return (
    <div className="flex-grow rounded-2xl overflow-hidden w-[50rem]">
      <div className="bg-zinc-900 border-zinc-800">
        <div className="p-8 space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-white">{name}</h1>
            <p className="text-lg text-orange-400">{role}</p>
          </div>

          <div className="grid gap-6 pt-6 border-t border-zinc-800">
            <div className="flex items-center text-zinc-400">
              <User className="w-5 h-5 mr-3" />
              <div>
                <p className="text-sm text-zinc-500">Full Name</p>
                <p className="text-white">
                  <DecryptedText text={name} speed={100} maxIterations={20} animateOn="view" revealDirection="start" sequential />
                </p>
              </div>
            </div>

            <div className="flex items-center text-zinc-400">
              <Mail className="w-5 h-5 mr-3" />
              <div>
                <p className="text-sm text-zinc-500">Email</p>
                <Link href={`mailto:${email}`} className="text-white hover:text-orange-400">
                  <DecryptedText text={email} speed={100} maxIterations={20} animateOn="view" revealDirection="start" sequential />
                </Link>
              </div>
            </div>

            <div className="flex items-center text-zinc-400">
              <Github className="w-5 h-5 mr-3" />
              <div>
                <p className="text-sm text-zinc-500">Github</p>
                <Link href={`https://${github}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-400">
                  <DecryptedText text={github} speed={100} maxIterations={20} animateOn="view" revealDirection="start" sequential />
                </Link>
              </div>
            </div>

            <div className="flex items-center text-zinc-400">
              <MapPin className="w-5 h-5 mr-3" />
              <div>
                <p className="text-sm text-zinc-500">Location</p>
                <p className="text-white">
                  <DecryptedText text={location} speed={100} maxIterations={20} animateOn="view" revealDirection="start" sequential />
                </p>
              </div>
            </div>

            <div className="flex items-center text-zinc-400">
              <Phone className="w-5 h-5 mr-3" />
              <div>
                <p className="text-sm text-zinc-500">Phone</p>
                <p className="text-white">
                  <DecryptedText text={phone} speed={100} maxIterations={20} animateOn="view" revealDirection="start" sequential />
                </p>
              </div>
            </div>

            <div className="flex items-center text-zinc-400">
              <Calendar className="w-5 h-5 mr-3" />
              <div>
                <p className="text-sm text-zinc-500">Join Date</p>
                <p className="text-white">
                  <DecryptedText text={joinDate} speed={100} maxIterations={20} animateOn="view" revealDirection="start" sequential />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
