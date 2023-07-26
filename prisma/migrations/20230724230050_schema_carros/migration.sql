-- CreateTable
CREATE TABLE "Carro" (
    "id" SERIAL NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,

    CONSTRAINT "Carro_pkey" PRIMARY KEY ("id")
);
