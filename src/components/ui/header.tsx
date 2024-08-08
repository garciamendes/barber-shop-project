import Image from "next/image"
import { Card, CardContent } from "./card"
import LogoSvg from '@/assets/imanges/logo.svg'
import { Button } from "./button"
import { CalendarDays, CircleUserRound } from "lucide-react"

export const Header = () => {
  return (
    <Card className="p-0 border-0">
      <CardContent className="flex justify-between items-center flex-row p-0 h-24 px-32">
        <Image src={LogoSvg} height={22} width={130} priority alt='Logo' />

        <CardContent className="flex justify-between items-center flex-row p-0 gap-2">
          <Button variant='ghost' className="gap-3">
            <CalendarDays />
            <strong>Agendamentos</strong>
          </Button>

          <Button variant='primary' className="gap-3">
            <CircleUserRound />
            <strong>Perfil</strong>
          </Button>
        </CardContent>
      </CardContent>
    </Card>
  )
}