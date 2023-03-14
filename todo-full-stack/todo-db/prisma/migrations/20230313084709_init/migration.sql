-- CreateTable
CREATE TABLE "ToDo" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "done" TEXT NOT NULL DEFAULT 'False',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ToDo_pkey" PRIMARY KEY ("id")
);
