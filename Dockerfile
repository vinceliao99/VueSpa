FROM microsoft/aspnetcore:2.0
ARG source
EXPOSE 80 5102
#ENV ASPNETCORE_URLS http://*:80
#RUN apt-get -qq update && apt-get -qqy --no-install-recommends install wget gnupg \
    #git \
    #unzip

#RUN curl -sL https://deb.nodesource.com/setup_6.x |  bash -
#RUN apt-get install -y nodejs

WORKDIR /app
COPY ${source:-obj/Docker/publish} .
ENTRYPOINT ["dotnet", "MBP.dll"]
#EXPOSE 80
#
#FROM microsoft/aspnetcore-build:2.0-nanoserver-1709 AS build
#WORKDIR /src
#COPY *.sln ./
##COPY MBP.csproj
#RUN dotnet restore
#COPY . .
#WORKDIR /src/
#RUN dotnet build -c Release -o /app
#
#
#
#FROM build AS publish
#RUN dotnet publish -c Release -o /app
#
#FROM base AS final
#WORKDIR /app
#COPY --from=publish /app .
#ENTRYPOINT ["dotnet", "MBP.dll"]


